import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";
import Nav from "../../component/Nav";
import Background from "../../component/Background";
export default function Home() {
  return (
    <>
      <Background />
      <Nav />
    </>
  );
}
