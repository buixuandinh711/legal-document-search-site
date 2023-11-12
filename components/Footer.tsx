import Link from "next/link";

export default function Footer() {
  return (
    <div className="container flex justify-center p-16">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Blockchain Legal Document System
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </div>
  );
}
