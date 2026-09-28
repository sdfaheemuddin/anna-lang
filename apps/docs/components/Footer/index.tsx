import React from "react";


const Footer = (props: Props) => {
  const {} = props;
  return (
    <footer>
      <div className="text-white text-sm text-center py-4">
        <div>
          &copy; 2025{" "}
          <a className="hover:text-bhagwa-600" href="https://github.com/sdfaheemuddin/">
            Syed Faheemuddin
          </a>
        </div>
        <div className="mt-2 text-gray-400">
          Based on the original{" "}
          <a
            className="hover:text-bhagwa-600"
            href="https://github.com/DulLabs/bhai-lang"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bhai Lang
          </a>{" "}
          project by DulLabs and its contributors.
        </div>
      </div>
    </footer>
  );
};
type Props = {};
export default React.memo(Footer);
