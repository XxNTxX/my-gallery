import Card from "./Card";
import Link from "next/link";

export default function List({ title, link }) {
  return (
    <Card title={title}>
      <div className="mx-auto border border-card-text">
        <div className="flex border-b border-card-text bg-slate-600">
          <div className="w-1/6 p-2 border-r border-card-text">Title</div>
          <div className="w-2/3 p-2 border-r border-card-text">Description</div>
          <div className="w-1/6 p-2">Link</div>
        </div>

        {link.map((item) => (
          <div key={item.url} className="flex border-b border-card-text">
            <div className="w-1/6 p-2 border-r border-card-text">{item.title}</div>
            <div className="w-2/3 p-2 border-r border-card-text">{item.discription}</div>
            <div className="w-1/6 p-2">
              <Link href={item.url} className="underline text-card-text2 hover:text-card-text3">
                見る
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}