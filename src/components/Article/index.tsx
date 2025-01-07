export function Article() {
  return (
    <a href="" className="col-span-12 p-10 border-2 border-dark-40 rounded-md bg-dark-20 cursor-pointer hover:border-brand-color">
      <article>
        <header>
          <time className="text-brand-color font-medium text-lg" dateTime="2017-10-04">4 October 2017</time>
          <h2 className="text-dark-60 font-medium text-2xl mt-4">What is Lorem Ipsum?</h2>
        </header>
        <p className="text-dark-50 font-medium text-xl mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      </article>
    </a>
  )
}
