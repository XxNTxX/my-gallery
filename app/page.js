import Card from "./component/Card";
import { p5Link } from "./component/link";
import List from "./component/List";


export default function Home() {
  return (
    <main>
      <div className="max-w-screen-md m-auto">
        <Card title="このページについて">
          <p>このページは私の作成したインタラクティブな作品やビジュアルエフェクトのギャラリーです。</p>
          <p>メインのページではサムネイル付きで自分の納得した作品を紹介していますが、こちらのページでは作ったものをタイトルと短い説明のみで紹介します。</p>
          <p>ソースコードは<a href="https://github.com/XxNTxX/my-gallery" target="_blank" rel="noopener noreferrer" className="underline text-card-text2 hover:text-card-text3">こちら</a>のgithubリポジトリから確認できます。</p>
        </Card>

        <List title="p5一覧" link={p5Link}/>
      </div>
    </main>
  );
}
