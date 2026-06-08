import { lusitana } from "@/app/ui/fonts";
import hero1 from "@/public/hero-1.jpg"
import heromobile from "@/public/hero-mobile.jpg"

import Image from "next/image";

const HtmlMain = () => {
  return (<> 
  
    <div className="p-4  ">

      <Image src={hero1} alt="hero image"  className="object-cover hidden md:block w-full border-4 border-red-500" height={760} width={1000} priority={true}/>
      {/* for mobile */}
      <Image src={heromobile} alt="hero image"  className="object-cover block md:hidden w-full border-4 border-red-500" priority={true}/>

      <p className={`${lusitana.className} antialiased p-4`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex earum
        delectus tempora aperiam id, beatae explicabo aliquid molestias autem
        dolore nihil eligendi ab, non ipsam! Beatae dolore obcaecati perferendis
        aliquam!
      </p>
      {/* hero section home */}
      <section id="home">
        <h2 className="text-2xl font-extrabold text-blue-600">Home</h2>

        <p className="max-w-2xl leading-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in
          aperiam eligendi dolorum quae ratione cumque, harum nobis dignissimos
          ipsum quo sapiente enim eius eum necessitatibus odit sit magni amet?
        </p>
      </section>

      {/* basic */}
      <section id="basic">
        <h2 className="text-2xl font-bold">basic secion</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          dolorum aliquid excepturi, cum iure consequatur neque doloribus, illo
          error explicabo tempora officia maiores. Quidem nobis temporibus
          maiores dolorum voluptas voluptatibus?
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in
          aperiam eligendi dolorum quae ratione cumque, harum nobis dignissimos
          ipsum quo sapiente enim eius eum necessitatibus odit sit magni amet?
        </p>
      </section>
      {/* medium  */}
      <section id="medium">
        <h2 className="text-2xl font-bold">medium section</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
          earum nobis, porro qui praesentium vel laudantium esse eveniet, facere
          illum est doloremque nisi. Eveniet laudantium ab quidem nulla neque
          iusto?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          accusantium qui pariatur veniam, nulla repellendus expedita beatae
          ullam illum eos soluta, atque, cupiditate voluptas. Hic aut deleniti
          facilis nisi velit!
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in
          aperiam eligendi dolorum quae ratione cumque, harum nobis dignissimos
          ipsum quo sapiente enim eius eum necessitatibus odit sit magni amet?
        </p>
      </section>
      {/* advnaced */}
      <section id="advanced">
        <h2 className="text-2xl font-bold">advanced fluency section</h2>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati in
          aperiam eligendi dolorum quae ratione cumque, harum nobis dignissimos
          ipsum quo sapiente enim eius eum necessitatibus odit sit magni amet?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi maiores
          vero architecto culpa impedit consequuntur repudiandae, sunt rerum qui
          dolor nisi repellendus aliquid illo necessitatibus quod cumque ipsam
          cupiditate voluptatibus!
        </p>
      </section>
    </div>
    </>
  );
};
export default HtmlMain;
