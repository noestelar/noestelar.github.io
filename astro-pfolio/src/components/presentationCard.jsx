function PresentationCard() {
  return (
    <section class="items-center p-6 flex mt-[10%] mb-[10%] justify-around h-full">
      <div class="">
        <h1 className="lg:text-[70px] xs:hidden">Noé Rivera</h1>
        <p className="text-xl">Information Technology Engineer</p>
        <p className="text-lg font-[100]">Web Developer</p>
      </div>
      <figure class="">
        <div class="">
          <img
            src="https://assets.materialup.com/uploads/5c9b5df3-df44-4172-aa01-057c9280665b/preview"
            class="circle core w-[100%] h-[100%]"
          />
        </div>
      </figure>
    </section>
  );
}

export default PresentationCard;
