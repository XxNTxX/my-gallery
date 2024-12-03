import Card from "./Card";
import Link from "next/link";

export default function List({ title, link }) {
  return (
    <Card title={title}>
      <table className="mx-auto">
        <thead>
          <tr>
            <th>Title</th>
            <th>Discription</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {link.map((item) => (
            <tr key={item.url}>
              <td>{item.title}</td>
              <td>{item.discription}</td>
              <td><Link href={item.url} className="underline">見る</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}