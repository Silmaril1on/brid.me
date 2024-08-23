const socMedia = [
  {
    name: "fb",
    link: "https://www.facebook.com/idbrid",
  },
  {
    name: "be",
    link: "https://www.behance.net/ikudarsk",
  },
  {
    name: "db",
    link: "https://dribbble.com/BRID",
  },
  {
    name: "ins",
    link: "https://www.instagram.com/brid.me",
  },
  {
    name: "ln",
    link: "https://www.linkedin.com/company/bridagency/",
  },
];

function SocialMedia() {
  return (
    <div className="h-9 items-center justify-end text-[14px] md:text-base text-gray200 space-x-1 md:space-x-3 w-auto flex flex-row hover:*:text-green duration-300">
      {socMedia.map((link, index) => {
        return (
          <a key={index} rel="noreferrer" target="_blank" href={link.link}>
            {link.name} \
          </a>
        );
      })}
    </div>
  );
}

export default SocialMedia;
