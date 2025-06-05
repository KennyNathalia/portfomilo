import Image from "next/image";

export default function Sides() {
  return (
    <>
    <div className="hidden lg:block fixed left-20 top-1/2 transform -translate-y-1/2">
        <Image
            src="/sidelogo.jpg"
            alt="Left Art"
            width={200}
            height={400} 
        />
    </div>
    <div className="hidden lg:block fixed right-20 top-1/2 transform -translate-y-1/2">
        <Image
            src="/sidelogo.jpg"
            alt="Right Art"
            width={200}
            height={400} 
        />
        </div>
    </>
  );
}
