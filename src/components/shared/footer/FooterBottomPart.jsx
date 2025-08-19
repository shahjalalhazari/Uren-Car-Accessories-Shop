import Image from "next/image";
import Link from "next/link";

const FooterBottomPart = () => {
  return (
    <footer className="bottom-footer-layout">
      <p>
        &copy; 2025{" "}
        <Link
          href={"https://www.templateshub.net/"}
          className="hover:text-primary"
          target="_blank"
        >
          Templateshub.
        </Link>
      </p>

      <Image
        src={"/images/footer/payment/1.png"}
        width={300}
        height={200}
        alt="UREN"
        className="payment"
      />
    </footer>
  );
};

export default FooterBottomPart;