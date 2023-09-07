'use client'
import {FC} from "react";
import Link from "next/link";

interface IProps {

}

const Page: FC<IProps> = () => {
    return (
        <>
            <h1>
                Ой... Сталась помилка(
            </h1>
            <Link href={'/'}>
                На головну
            </Link>
        </>
    )
}
export default Page