import { ArticleProps } from "./types";

export function Article({ date, title, description }: ArticleProps) {
  return (
    <a href="" target="_blank" className="col-span-12 p-10 border-2 border-dark-40 rounded-md bg-dark-20 hover:border-brand-color">
      <article role="article">
        <header>
          <time className="text-brand-color font-medium text-lg" dateTime={date}>{date}</time>
          <h2 className="text-dark-60 font-medium text-2xl mt-4">{title}</h2>
        </header>
        <p className="text-dark-50 font-medium text-xl mt-4">{description}</p>
      </article>
    </a>
  )
}
