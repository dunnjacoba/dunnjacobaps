import Image from "next/image";
export default function MyPhoto(){
    return(

        <div className="container">
            <Image src="/images/pfp2.jpg" alt="Image of Jacob Dunn" width={50} height={50} />
        </div>
    )
}