Events.on(ClientLoadEvent, () => {

    var arrs = [
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.hotrock, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand],
        [Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand, Blocks.darksand]
    ];
    const hhhGenerator = extend(SerpuloPlanetGenerator, {
        getBlock(p){
            this.arr = arrs;
            this.super$getBlock(p);
        }
    });
    hhhGenerator.arr = arrs;



    const tontontros = new Planet("tontontros", Planets.sun, 1, 1);
    tontontros.generator = hhhGenerator;
    tontontros.mesh = new HexMesh(tontontros, 5);
    tontontros.orbitRadius = 10;
    tontontros.orbitTime = 1.5 * 60;
    tontontros.rotateTime = 30;
    tontontros.bloom = true;
    tontontros.accessible = true;
    tontontros.startSector = 1;
    tontontros.hasAtmosphere = true;
    tontontros.atmosphereColor = Liquids.cryofluid.color;
    tontontros.atmosphereRadIn = 0.1;
    tontontros.atmosphereRadOut = 0.3;
    tontontros.alwaysUnlocked = true;
    tontontros.localizedName = "Router";

    const anhgg = new SectorPreset("router0", tontontros, 0);
    anhgg.localizedName = "Router0";
    anhgg.alwaysUnlocked = true;

    const an = new SectorPreset("router1", tontontros, 1);
    an.localizedName = "Router1";
    an.alwaysUnlocked = true;

    const anb = new SectorPreset("router2", tontontros, 2);
    anb.localizedName = "Router2";
    anb.alwaysUnlocked = true;

    const ando = new SectorPreset("router3", tontontros, 3);
    ando.localizedName = "Router3";
    ando.alwaysUnlocked = true;

    const ang = new SectorPreset("router4", tontontros, 4);
    ang.localizedName = "Router4";
    ang.alwaysUnlocked = true;

    const anf = new SectorPreset("router5", tontontros, 5);
    anf.localizedName = "Router5";
    anf.alwaysUnlocked = true;

    const anu = new SectorPreset("router6", tontontros, 6);
    anu.localizedName = "Router6";
    anu.alwaysUnlocked = true;

    const anbu = new SectorPreset("router7", tontontros, 7);
    anbu.localizedName = "Router7";
    anbu.alwaysUnlocked = true;

    const andu = new SectorPreset("router8", tontontros, 8);
    andu.localizedName = "Router8";
    andu.alwaysUnlocked = true;

    const angu = new SectorPreset("router9", tontontros, 9);
    angu.localizedName = "Router9";
    angu.alwaysUnlocked = true;

    const anfu = new SectorPreset("router10", tontontros, 10);
    anfu.localizedName = "Router10";
    anfu.alwaysUnlocked = true;

    const ank = new SectorPreset("router11", tontontros, 11);
    ank.localizedName = "Router11";
    ank.alwaysUnlocked = true;

    const anbk = new SectorPreset("router12", tontontros, 12);
    anbk.localizedName = "Router12";
    anbk.alwaysUnlocked = true;

    const andk = new SectorPreset("router13", tontontros, 13);
    andk.localizedName = "Router3";
    andk.alwaysUnlocked = true;

    const angk = new SectorPreset("router14", tontontros, 14);
    angk.localizedName = "Router14";
    angk.alwaysUnlocked = true;

    const anfk = new SectorPreset("router15", tontontros, 15);
    anfk.localizedName = "Router15";
    anfk.alwaysUnlocked = true;

    const anuk = new SectorPreset("router16", tontontros, 16);
    anuk.localizedName = "Router16";
    anuk.alwaysUnlocked = true;

    const anbuk = new SectorPreset("router17", tontontros, 17);
    anbuk.localizedName = "Router17";
    anbuk.alwaysUnlocked = true;

    const anduk = new SectorPreset("router18", tontontros, 18);
    anduk.localizedName = "Router18";
    anduk.alwaysUnlocked = true;

    const anguk = new SectorPreset("router19", tontontros, 19);
    anguk.localizedName = "Router19";
    anguk.alwaysUnlocked = true;

    const anfuk = new SectorPreset("router20", tontontros, 20);
    anfuk.localizedName = "Router20";
    anfuk.alwaysUnlocked = true;

    const anfukl = new SectorPreset("router21", tontontros, 21);
    anfukl.localizedName = "Router21";
    anfukl.alwaysUnlocked = true;

    const anfukk = new SectorPreset("router22", tontontros, 22);
    anfukk.localizedName = "Router22";
    anfukk.alwaysUnlocked = true;

    const anfukp = new SectorPreset("router23", tontontros, 23);
    anfukp.localizedName = "Router23";
    anfukp.alwaysUnlocked = true;

    const anfuku = new SectorPreset("router24", tontontros, 24);
    anfuku.localizedName = "Router24";
    anfuku.alwaysUnlocked = true;
    
    const anfukuh = new SectorPreset("router25", tontontros, 25);
    anfukuh.localizedName = "Router25";
    anfukuh.alwaysUnlocked = true;

    const anfukuhh = new SectorPreset("router26", tontontros, 26);
    anfukuhh.localizedName = "Router26";
    anfukuhh.alwaysUnlocked = true;

    const anfukuhhh = new SectorPreset("router27", tontontros, 27);
    anfukuhhh.localizedName = "Router27";
    anfukuhhh.alwaysUnlocked = true;

    const anfukuhhhh = new SectorPreset("router28", tontontros, 28);
    anfukuhhhh.localizedName = "Router28";
    anfukuhhhh.alwaysUnlocked = true;

    const anfukufff = new SectorPreset("router29", tontontros, 29);
    anfukufff.localizedName = "Router29";
    anfukufff.alwaysUnlocked = true;

    const anfukuff = new SectorPreset("router30", tontontros, 30);
    anfukuff.localizedName = "Router30";
    anfukuff.alwaysUnlocked = true;

    const anfukuf = new SectorPreset("router31", tontontros, 31);
    anfukuf.localizedName = "Router31";
    anfukuf.alwaysUnlocked = true;


});
