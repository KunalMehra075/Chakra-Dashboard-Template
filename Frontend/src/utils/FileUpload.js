import axios from "axios";
import { BASE_URL } from "./BaseURL"
import React, { useRef } from 'react'
import { useToast } from "@chakra-ui/react";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";

const FileUpload = ({ setIsUploaded, setfilename, setFileURL, isUploaded }) => {
    const toast = useToast()
    const fileInputRef = useRef()
    const HandleUploadSomething = async (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        axios
            .post(`${BASE_URL}/api/test/upload-to-s3`, formData)
            .then((res) => {
                const filelocation = res?.data?.fileUrl;
                console.log(res.data.message, "URL :", filelocation);

                setIsUploaded(true);
                setfilename(file.name);
                setFileURL(filelocation);

                toast({
                    position: "top",
                    title: "Uploaded File Successfully",
                    status: "success",
                    duration: 4000,
                    isClosable: true,
                });
            })
            .catch((err) => {
                console.log(err);
                setIsUploaded(false);
                toast({
                    title: "Something Went wrong",
                    status: "error",
                    duration: 4000,
                    position: "top",
                });
            });
    };

    return (
        <>
            <input
                type="file"
                accept="image/*, application/pdf"
                name="download_link"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={HandleUploadSomething}
            />
            <Button
                colorScheme={isUploaded ? "green" : "blue"}
                // isLoading={loading}
                loadingText="Uploading"
                spinnerPlacement="start"
                leftIcon={isUploaded ? <CheckIcon /> : <AddIcon />}
                onClick={() => {
                    fileInputRef.current.click();
                }}
            >
                {filename}
            </Button>
        </>
    )
}

export default FileUpload

