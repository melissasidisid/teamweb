import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Background from "../../component/background";
import Nav from "../../component/Nav";

export default function Home() {
  return (
    <>
      <Background />
      <Nav />
    </>
  );
}
