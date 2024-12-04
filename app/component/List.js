import Card from "./Card";
import Link from "next/link";

export default function List({ title, link }) {
  return (
    <Card title={title}>
      <table className="mx-auto border border-collapse">
        <thead>
          <tr>
            <th className="border p-2 border-slate-600">Title</th>
            <th className="border p-2 border-slate-600">Discription</th>
            <th className="border p-2 border-slate-600">Link</th>
          </tr>
        </thead>
        <tbody>
          {link.map((item) => (
            <tr key={item.url}>
              <td className="border p-2 border-slate-600">{item.title}</td>
              <td className="border p-2 border-slate-600">{item.discription}</td>
              <td className="border p-2 border-slate-600"><Link href={item.url} className="underline">見る</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}