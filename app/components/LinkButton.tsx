import Image from "next/image";
import Link from "next/link";

const LinkButton = ({ name, link, url, pos }: { name: string; link: string; url: string; pos: string | number }) => {
  return (
    <div className={`items-center justify-center p-0.5 rounded bg-gradient-to-r ${pos == "1" ? "from-yellow1 to-blue1 dark:from-blue1 dark:to-yellow1" : "from-blue1 to-yellow1 dark:from-yellow1 dark:to-blue1"}`}>
      <Link title={name + " link"} href={link} target="_blank" className="flex justify-center items-center py-1 px-2 gap-x-2 rounded whitespace-nowrap bg-buttonBg dark:bg-darker">
        <Image src={url} alt={name + " alt"} width={24} height={24} className="w-6 xs:w-8 text-white" />
        {name}
      </Link>
    </div>
  );
};

export default LinkButton;
