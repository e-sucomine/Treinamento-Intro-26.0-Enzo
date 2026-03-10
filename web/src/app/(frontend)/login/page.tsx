export default function Login() {
  return (
    <div className="min-h-screen flex bg-black text-white">
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-black">
        <img src="/LogoM.png" alt="Logo" className="h-[640px] w-auto max-w-[60%] object-contain" />
      </div>

      <div className="flex w-full lg:w-1/2 items-center justify-center p-6">
        <div className="w-full max-w-sm space-y-4">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <input className="w-full rounded border border-white/20 bg-white/10 p-3" placeholder="Email" />
          <input className="w-full rounded border border-white/20 bg-white/10 p-3" placeholder="Senha" type="password" />
          <button className="w-full rounded bg-white/10 p-3 text-white hover:bg-white/20">Entrar</button>
        </div>
      </div>
    </div>
  );
}