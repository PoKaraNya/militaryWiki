'use client'
import GalerryGridVirtualized from "@/components/GalerryGridVirtualized";
import "@/styles/Galerry/main.scss"
import {useApi} from "@/hooks/useApi";
import {CAT_API} from "@/config/api";
import {ICatApi} from "@/types/api";
import Loading from "@/components/Loading";
import {useRef} from "react";

export default function CatGalerryPage() {
    const {data, error, refetch, loading} = useApi<ICatApi[]>(CAT_API, true, 10)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    if (loading && !data) {
        return <Loading/>
    }

    if (error) {
        return <h2>Помилка: {error}</h2>
    }

    const handleFocus = () => {
        buttonRef.current?.focus()
    }

    const handleAlert = () => {
        alert(textAreaRef.current?.value)
    }

    const photos = (data ?? []).map(({url}) => url)

    return (
        <main className="gallery">
            <button ref={buttonRef} onClick={() => refetch()}>
                Оновити
            </button>
            <div className="container">
                <GalerryGridVirtualized data={photos}/>
            </div>
            <button onClick={handleFocus}>
                Фокус на кнопку оновлення
            </button>
            <textarea
                name="alert"
                id="alert"
                ref={textAreaRef}
                cols={30}
                rows={10}
            />
            <button onClick={handleAlert}>
                Alert
            </button>
        </main>
    )
}