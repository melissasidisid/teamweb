import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
        />
      </Head>
      <div
        class="p-3 mb-2 bg-secondary  text-white"
        style={{ height: "100vh" }}
      >
        <div
          id="carouselExample"
          class="carousel slide"
          style={{ justifyContent: "center" }}
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <Image
                height={"100"}
                src="/im.png"
                width={500}
                alt="cette photo"
                layout="responsive"
              />
            </div>
            <div class="carousel-item">
              <Image
                src="/Img.png"
                width={500}
                height={500}
                alt="cette photo"
                layout="responsive"
                class="figure-img img-fluid rounded"
              />
            </div>
            <div class="carousel-item">
              <Image
                src="/image N1.png"
                width={500}
                height={500}
                alt="cette photo"
                layout="responsive"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
