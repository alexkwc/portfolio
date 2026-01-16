import React from 'react';

const profile = {
    name: "Alex Chu",
    description: "Full-stack developer passionate about leveraging technology to solve real-world problems and deliver meaningful value",
    github: "https://github.com/alexkwc",
    linkedin: "https://www.linkedin.com/in/alex-chu"
};

const socialLinks = [
    {
        name: "LinkedIn",
        url: profile.linkedin,
    },
    {
        name: "GitHub",
        url: profile.github,
    },
];

const getInitials = (fullName: string) => {
    const names = fullName.split(' ').filter(Boolean);
    if (names.length === 0) return '';
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
};

const App: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6 selection:bg-blue-500/30">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-blue-500/10 rounded-full blur-[120px]" />
            </div>

            <main className="relative z-10 w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-2xl overflow-hidden">
                <section className="text-center mb-10">
                    <div className="relative inline-block mb-6">
                        <div className="w-28 h-28 bg-linear-to-tr from-blue-600 to-emerald-400 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl ring-4 ring-white/5">
                            {getInitials(profile.name)}
                        </div>
                    </div>

                    <h1 className="text-3xl font-bold text-white tracking-tight mb-3">
                        {profile.name}
                    </h1>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-70 mx-auto">
                        {profile.description}
                    </p>
                </section>

                <nav className="flex flex-col space-y-4">
                    {socialLinks.map(({name, url}) => (
                        <a
                            key={name}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center justify-center p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/20"
                        >
                            <span className="font-medium text-slate-200">{name}</span>
                        </a>
                    ))}
                </nav>

                <footer className="mt-12 text-center">
                    <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em] font-semibold">
                        &copy; {new Date().getFullYear()} {profile.name.toUpperCase()}
                    </p>
                </footer>
            </main>
        </div>
    );
};

export default App;