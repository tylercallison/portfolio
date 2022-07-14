import Image from "next/future/image";

const Social = () => {
  return (
    <div className="w-24 mt-6">
      <div className="grid grid-cols-2 items-center">
        <a href="https://www.linkedin.com/in/tyler-callison/">
          <Image
            src="/logos/linkedin.svg"
            alt="Linkedin"
            width={25}
            height={25}
          />
        </a>
        <a href="https://github.com/tylercallison">
          <Image src="/logos/github.svg" alt="Github" width={25} height={25} />
        </a>
      </div>
    </div>
  );
};

export default Social;
