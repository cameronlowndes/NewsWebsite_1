export default function ArchiveLayout({ Archive, Latest }) {
    return <div>
        <h1>News Archive</h1>
        <section id="archive-filter">
            {Archive}
        </section>
        <section id="archive-latest">
            {Latest}
        </section>
    </div>
}