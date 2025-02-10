"use client";

import {Avatar, Button} from "@mui/material";
import {useAppDispatch, useAppSelector} from "@/app/store/hooks";
import {useEffect} from "react";
import {getUserDataFromStorage, removeCookies} from "@/app/store/slices/userSlice/userSliceThunks";
import {usePathname} from "next/navigation";
import {localizedProfileText, LocalizedProfileText} from "@/app/[locale]/(app)/profile/@assets/language";

/**
 * The profile is only displayed if the cookie has
 * tokenized middleware intercept functionality on the input.
 * @constructor
 */
export default function Profile() {
    const user = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const lang = usePathname().split("/")[1];
    const profileText: LocalizedProfileText = localizedProfileText(lang)
    /**
     * I store user data in LocalStorage so that
     * I don't have to load the server with a request.
     * The data is saved at the moment of logging into the account.
     */
    useEffect(() => {
        dispatch(getUserDataFromStorage());
    }, [dispatch])


    return (
        <div className="relative h-[70lvh] shadow-lg rounded-br-3xl rounded-lg p-10 bg-gradient-to-br dark:from-gray-900 via-white to-blue-100 dark:text-dark-text_color px-4 from-blue-100 dark:via-gray-600 dark:to-gray-700 text-text_color transition-all">
                <div className="flex items-center space-x-4 pl-4">
                    <Avatar
                        src={user.avatarUrl || "https://via.placeholder.com/150"}
                        alt={user.username}
                        sx={{ width: 80, height: 80 }}
                    />
                    <div>
                        <h1 className="text-2xl font-bold">{user.username || "Имя не указано"}</h1>
                        <p className="text-gray-600">{user.email || "Email не указан"}</p>
                    </div>
                </div>

                {/* Profile information */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-4">{profileText.information} : </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-4">
                        <div>
                            <p className="dark:text-dark-text_color_muted text-text_color_muted">{profileText.phone}:</p>
                            <p className="text-lg">{user.phone || profileText.unspecified}</p>
                        </div>
                        <div>
                            <p className="dark:text-dark-text_color_muted text-text_color_muted">{profileText.role}:</p>
                            <p className="text-lg">{user.role || profileText.unspecified}</p>
                        </div>
                        <div>
                            <p className="dark:text-dark-text_color_muted text-text_color_muted">{profileText.lastLogin}</p>
                            <p className="text-lg">{user.lastLogin || profileText.unspecified}</p>
                        </div>
                        <div>
                            <p className="dark:text-dark-text_color_muted text-text_color_muted">{profileText.address}:</p>
                            <p className="text-lg">{user.email || profileText.unspecified}</p>
                        </div>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="mt-6 flex justify-center space-x-4 ">
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => alert("Функция редактирования профиля")}
                    >
                        {profileText.editProfile}
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => dispatch(removeCookies())}
                    >
                        {profileText.logout}
                    </Button>
                </div>
        </div>
    );
}