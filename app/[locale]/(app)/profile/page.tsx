"use client";

import {Avatar, Button} from "@mui/material";
import {usePathname, useRouter} from "next/navigation";
import {localizedProfileText, LocalizedProfileText} from "@/app/[locale]/(app)/profile/@assets/language";
import {useGetUserDataFromStorageQuery, useRemoveCookiesMutation} from "@/app/store/slices/userSlice/userSliceQuery";


/**
 * The profile is only displayed if the cookie has
 * tokenized middleware intercept functionality on the input.
 * @constructor
 */
export default function Profile() {
    const {data: user} = useGetUserDataFromStorageQuery({key: "user"});
    const [removeCookies, isRemove] = useRemoveCookiesMutation();
    const lang = usePathname().split("/")[1];
    const profileText: LocalizedProfileText = localizedProfileText(lang)
    const router = useRouter();

    /**
     * I store user data in LocalStorage so that
     * I don't have to load the server with a request.
     * The data is saved at the moment of logging into the account.
     */
    if (isRemove.data) router.push("login")
    return user && (
        <div
            className="relative max-w-3xl mx-auto bg-gradient-to-br dark:from-gray-900 from-blue-100 dark:via-gray-600 via-white dark:to-gray-700 to-blue-100 text-text_color dark:text-dark-text_color shadow-2xl rounded-3xl p-2 px-4 transition-all duration-300 ">
            <div className="flex flex-col items-center">
                <Avatar
                    src={user.avatarUrl || "https://via.placeholder.com/150"}
                    alt={user.username}
                    sx={{width: 100, height: 100}}
                    className="shadow-lg border-4 border-white dark:border-gray-800"
                />
                <h1 className="mt-4 text-3xl font-bold">{user.username || "Имя не указано"}</h1>
                <p className="text-gray-600 dark:text-gray-300">{user.email || "Email не указан"}</p>
            </div>

            {/* Profile information */}
            <div className="mt-6 bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4 text-center">{profileText.information}:</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <p className="text-gray-500 dark:text-gray-400">{profileText.phone}:</p>
                        <p className="text-lg font-medium">{user.phone || profileText.unspecified}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-gray-400">{profileText.role}:</p>
                        <p className="text-lg font-medium">{user.role || profileText.unspecified}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-gray-400">{profileText.lastLogin}:</p>
                        <p className="text-lg font-medium">{user.lastLogin || profileText.unspecified}</p>
                    </div>
                    <div>
                        <p className="text-gray-500 dark:text-gray-400">{profileText.address}:</p>
                        <p className="text-lg font-medium">{user.email || profileText.unspecified}</p>
                    </div>
                </div>
            </div>

            {/* Action buttons */}
            <div className="mt-6 flex justify-center space-x-4">
                <Button
                    variant="contained"
                    color="primary"
                    className="!py-3 !px-6 !text-lg !rounded-xl !shadow-md"
                    onClick={() => alert("Функция редактирования профиля")}
                >
                    {profileText.editProfile}
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    className="!py-3 !px-6 !text-lg !rounded-xl !shadow-md"
                    onClick={() => removeCookies({key: "user", cookiesKey: "access_token"})}
                >
                    {profileText.logout}
                </Button>
            </div>
        </div>

    )

}