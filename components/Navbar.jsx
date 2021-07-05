function Navbar() {
    return (
        <div className="px-5 text-xl shadow-xl md:px-96 md:py-2">
            <div className="flex justify-end md:justify-between">
                <div>Agen Telor Jakarta</div>
                <div className="justify-around hidden space-x-5 md:flex md:block">
                    <div>Home</div>
                    <div>Galeri</div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
