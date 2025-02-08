import React from "react";
import {ErrorScreen} from "@/app/[locale]/(app)/@components/ErrorScreen";
import {LoaderScreen} from "@/app/[locale]/(app)/@components/LoaderScreen";
import {languageMessage} from "@/i18n/languages";
import {LoadingStatus} from "@/app/store/slices/wordsSliderSlice/wordsSliderSlice";


type LoadingHandlerProps = {
    status: string;
    message: languageMessage;
    onRetry?: () => void;
};
/**
 * Handles uploads and errors during uploading
 * status - rejected / padding /  fulfilled;
 * message - {em: "...", ru: "..."}
 * onRetry - function to reload the page in case of error.
 */
const LoadingHandler: React.FC<LoadingHandlerProps> = ({ status, message, onRetry }) => {
    if (status === LoadingStatus.rejected) {
        return <ErrorScreen message={message} onRetry={onRetry!} />;
    }
    if (status === LoadingStatus.padding) {
        return <LoaderScreen message={message} />;
    }
    return null;
};

export default LoadingHandler;