import Card from "./component/Card";
import { p5Link } from "./component/contentLinks";
import List from "./component/List";
import StyledLink from "./component/StyledLink";


export default function Home() {
  return (
    <main>
      <div className="max-w-screen-md m-auto">
        <Card title="このページについて">
          <p>このページは私の作成したインタラクティブな作品やビジュアルエフェクトのギャラリーです。</p>
          <p>メインのページではサムネイル付きで自分の納得した作品を紹介していますが、こちらのページでは作ったものをタイトルと短い説明のみで紹介します。</p>
          <p>ソースコードは<StyledLink href="https://github.com/XxNTxX/my-gallery" text="こちら" />のgithubリポジトリから確認できます。</p>
          <br />
          <p>メインのページは<StyledLink href="#" text="こちら" />から</p>
        </Card>

        <List title="p5一覧" link={p5Link}/>
      </div>
    </main>
  );
}
