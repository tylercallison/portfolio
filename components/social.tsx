import Image from "next/image";
import Link from "next/link";

const Social = () => {
  return (
    <div className="w-20 mt-6">
      <div className="grid grid-cols-2 items-center gap-6">
        <Link href="https://www.linkedin.com/in/tyler-callison/">
          <Image
            src="/logos/linkedin.svg"
            alt="Linkedin"
            width={30}
            height={30}
            className="w-full"
          />
        </Link>
        <Link href="https://github.com/tylercallison">
          <Image
            src="/logos/github.svg"
            alt="Github"
            width={30}
            height={30}
            className="w-full"
          />
        </Link>
      </div>
    </div>
  );
};

export default Social;
