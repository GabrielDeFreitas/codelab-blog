interface ArticleProps {
  time: string;
  title: string;
  description: string;
}

export function Article({time, title, description}: ArticleProps) {
  return (
    <article className="col-span-12 p-10 border-2 border-dark-40 rounded-md bg-dark-20 cursor-pointer hover:border-brand-color">
      <header>
        <time className="text-brand-color font-medium text-lg" dateTime="2017-10-04">{time}</time>
        <h2 className="text-dark-60 font-medium text-2xl mt-4">{title}</h2>
      </header>
      <p className="text-dark-50 font-medium text-xl mt-4">{description}</p>
    </article>
  )
}
