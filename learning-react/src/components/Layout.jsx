import Header from "./Header";

const Layout = () => {
    return (
        <div>
            <Header/>
            {/* <div className="flex gap-2">
                
                <div className="p-12 bg-amber-500 w-96 text-center">1</div>
                <div className="p-12 bg-blue-300 w-96 text-center">1</div>
                <div className="p-12 bg-blue-200 w-96 text-center">1</div>
                </div> */}

            {/* <div className="grid grid-cols-3 grid-rows-2 gap-3">
                <div className="p-12 row-span-2 bg-amber-500 text-center">1</div>
                <div className="p-12 col-span-2 bg-blue-300  text-center">1</div>
                <div className="p-12 col-span-2 bg-blue-200 text-center">1</div>
            </div> */}

            <section>
                <div className="text-center font-bold mt-2">
                    <p className="text-4xl">Product Section</p>
                    <p className="text-2xl">Find your choice..</p>
                </div>
                {/* Cards */}
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-1 lg:px-18 md:px-10 px-8">
                    {/* Single Card */}
                    <div className=" shadow-2xl p-3 m-3">
                        <img src="https://pbs.twimg.com/profile_images/1358303425402920962/tRD22lvz_400x400.jpg" alt="product" />
                        <div className="p-1 mt-2">
                            <p className="font-bold">RELOJES - Luxury News & Magazines</p>
                            <p>Price: $120</p>
                            <p>Stock:09</p>
                        </div>
                    </div>

                    <div className=" shadow-2xl p-3 m-3">
                        <img src="https://pbs.twimg.com/profile_images/1358303425402920962/tRD22lvz_400x400.jpg" alt="product" />
                        <div className="p-1 mt-2">
                            <p className="font-bold">RELOJES - Luxury News & Magazines</p>
                            <p>Price: $120</p>
                            <p>Stock:09</p>
                        </div>
                    </div>

                    
                    <div className=" shadow-2xl p-3 m-3">
                        <img src="https://pbs.twimg.com/profile_images/1358303425402920962/tRD22lvz_400x400.jpg" alt="product" />
                        <div className="p-1 mt-2">
                            <p className="font-bold">RELOJES - Luxury News & Magazines</p>
                            <p>Price: $120</p>
                            <p>Stock:09</p>
                        </div>
                    </div>

                    <div className=" shadow-2xl p-3 m-3">
                        <img src="https://pbs.twimg.com/profile_images/1358303425402920962/tRD22lvz_400x400.jpg" alt="product" />
                        <div className="p-1 mt-2">
                            <p className="font-bold">RELOJES - Luxury News & Magazines</p>
                            <p>Price: $120</p>
                            <p>Stock:09</p>
                        </div>
                    </div>

                    <div className=" shadow-2xl p-3 m-3">
                        <img src="https://pbs.twimg.com/profile_images/1358303425402920962/tRD22lvz_400x400.jpg" alt="product" />
                        <div className="p-1 mt-2">
                            <p className="font-bold">RELOJES - Luxury News & Magazines</p>
                            <p>Price: $120</p>
                            <p>Stock:09</p>
                        </div>
                    </div>

                    <div className=" shadow-2xl p-3 m-3">
                        <img src="https://pbs.twimg.com/profile_images/1358303425402920962/tRD22lvz_400x400.jpg" alt="product" />
                        <div className="p-1 mt-2">
                            <p className="font-bold">RELOJES - Luxury News & Magazines</p>
                            <p>Price: $120</p>
                            <p>Stock:09</p>
                        </div>
                    </div>


                </div>

            </section>
            
            
        </div>
    );
};

export default Layout; 