import Layout from "@/components/Layout";

export default function Game() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="w-full h-screen">
          <iframe
            src="https://securesave.preview.emergentagent.com/"
            title="CyberSquad Game"
            className="w-full h-full border-0"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
          />
        </div>
      </div>
    </Layout>
  );
}
