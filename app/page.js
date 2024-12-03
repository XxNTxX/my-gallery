import Card from "./component/Card";

export default function Home() {
  return (
    <main>
      <Card title="このページについて">
        <p>このページは私の作成したインタラクティブな作品やビジュアルエフェクトのギャラリーです。</p>
        <p>メインのページではサムネイル付きで自分の納得した作品を紹介していますが、こちらのページでは作ったものをタイトルと短い説明のみで紹介します。</p>
        <p>ソースコードは<a href="https://github.com/XxNTxX/my-gallery" target="_blank" rel="noopener noreferrer" className="underline text-blue-700">こちら</a>のgithubリポジトリから確認できます。</p>
      </Card>
    </main>
  );
}
