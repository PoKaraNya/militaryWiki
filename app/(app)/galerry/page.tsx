import GalerryGridVirtualized from "@/components/GalerryGridVirtualized";
import photos from "@/mock/photos.json"
import "@/styles/Galerry/main.scss"


export default function GalerryPage() {
    return (
        <main className="gallery">
            <div className="container">
                <GalerryGridVirtualized data={photos}/>
            </div>
            <ul className="list">
                {new Array(8).fill('елемент').map((element, index) => {
                    return <li key={index}>{`${element}: ${index}`}</li>
                })}
            </ul>
        </main>
    )
}