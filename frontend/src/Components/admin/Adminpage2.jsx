import { useEffect, useState } from "react";
import { deleteuser, getuserall } from "../api/api";
import { useNavigate } from "react-router-dom";

const AdminPage2 = () => {
  const [user, setuser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fecthaa = async () => {
      const res = await getuserall();
      setuser(res);
    };
    fecthaa();
  }, []);
  const handledelete = async (sid) => {
    const fecthaa = async () => {
      const res = await deleteuser(sid);
    };
    fecthaa();
    window.location.reload();
  };
  return (
    <div className="page1_container">
      <div className="order_list">
        <div className="admin_name">
          <p>Tên người dùng</p>
        </div>
        <div className="admin_quantity a">
          <p> số đơn </p>
        </div>
        <div className="admin_price">
          <p> Edit </p>
        </div>
      </div>
      {user?.map((data, index) => (
        <div className="detail_order">
          <div className="detail_name">
            <img
              className="detail_name_img"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADqAN0DASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAYHAQQFAwII/8QAShAAAQQBAQQHAwYKCQIHAAAAAQACAwQFEQYSITETQVFhcYGRByKhFCMyQlKCFRYkM1RicpSxslVjc5KiwdHS0yVDNkR0g6Ozw//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwC20REBERAREQEREBEUez+1mIwQdE8mzf0BbUhcA5oPEGZ+hDR5E9yCQri39qNmcaXMs5GEzN11hr6zygj6rmwg6HxIVU5javP5fpG2LRgqHX8mqkxQ7vZIdd53mfILVxuB2gywa7H46eSI8p5AIK3iJJdAfIFBPrHtKxTCRVx12bvmfDAD6F5+C0X+0yfX3MNEB+vdcT8IVrVfZrmJNDcyVKvqNS2vFLYcPvPMY+C6LfZjU09/NWydPqVq7R6O3v4oPOP2mjUdLhTp1mK4CR5PiH8V16ntC2YsFrZ/llRx5meHfjB/agLj8FyJfZkND0GafvdQnpscCfGORv8ABcS7sDtVUDnQsq3WAE/kspZLp/ZzgD0cUFsU7+OyEfS0rUFiPhq6CRr93XqcBxB8Qtlfnz/qWLtDUW6N2I6jUSV5294PA6eoUzwntCuQGODNRmzDwb8qga1thnVrJGNGuHbpofFBaCLXqXKV+CO1TnjnryDVkkTtWntB6wR1g8VsICIiAiIgIiICIiAiIgIiICLKwgIiiO2m0pw9VtKnJpkrjCWubzrV+LTL+0eIZ5n6uhDS2u2y+QumxWJeDdGrLdpujm1TyMcXUZO0/V5cT9Cu6GPyuauGtRifYsvPSTSSOPRxBx4y2JTrpr5k9QK+8PiL+dvx0KnAkdLZsPBcytDroZH9pPJo14nuBIuvD4fG4SnHTox7rBo6WR2hlnl00Msrutx+HIaAIODg9hMNjBHPea3I3xo7fnYPk0Lv6mA6jh2u1PhyUuAA4DkOAA6gsogIiICIiDUvY7G5KE179WGxEddGytBLSetjh7wPeCFW20Owdui2W5hzLaqt1c+q73rULesxkfTA7Of7StREFEYTO5PBWenpv3onkfKazyehsNHD3h1OHU4DUd44G5cNmKGbpR3KbjoTuTRO06WCUAExyAdfZ2jj1qLbY7Hsttny2KiAutBluV4xwttA1MkbR/3B/i8ecEwGctYG/Hch1fA/djuQA8J4Ner9ZvNp8uRKC9kXjVtVrtatbrSCSvYjZLC9vJzHDUefavZAREQEREBERAREQEREBERBr3LdejVtXLDt2CtC+aU8Nd1g10GvWeQ8VQ+QvXcvkLNyRrpLV2cCOJmpO88iOKCPw4NCsT2j5Iw0aOLjdo67KZ7AB49BXI3WnuLiD91R/wBn+KbezEuQlaDBiY2uj14g25wWs5/ZbvHxIQT/AGYwMOAxkdchrrk5E+QmaPzk5H0Qee636LfDXmePdREBERAREQEREBERAVT7d7Ptx1tuVqRhtO/IROxoO7DbOriR1AP4nxB7VbC0ctjoctjr2Pl03bETmscfqSj3o3+RAKCBezvNFks+Dnf7ku/ax+8foyDjNEPH6YHc5WWvz5DNbxV6Cw0FlrHWhIWcj0kL9Hxnx0LT4q/q88NqvWswneisQxzxEdbJGh4PxQeqIiAiIgIiICIiAiIgIiIKb27tGztHcj11bThrVGeTOmd8Xn0U42Apits5WmI+cyE9i686cd1zuij1+60eqrHaOQvze0ch6sjfA8I5HMH8FdGChbBhMFC36MeNpN8+haSg6SIiAiIgIiICIiAiIgIiIKY22pintFfLW7sdxsN5neZW7rz/AHmuPmrA2Etm1s1j2uJLqclik4nsikJYP7paov7S4t2/hZ9OMlOeIn+ylDh/MV0vZpI52OzMJ5R5Frx/7lePX+CCeoiICIiAiIgIiICIiDKwiIKC2gYW5faOMa6jI5IDXvmeQrvxDxJisPIDqH4+k/Ud8LCqh2yrfJtpMw3Q7s0kVpveJo2uJHnvKyti7QtbNYY6gurxOpSdzqzzEB6AHzQSJERAREQEREBERAREQEREFZ+0x7TawMfW2vcefBz4wP4Ld9mTT8izz+o34WjxbXaT/ELge0G0J9oDCNNKVKvXdofrv3pz8HNUu9ndcw7PdMRxu37lgHtY1wrt/kQTBERAREQEREBERAREQZWFlYQVr7Sce4S4rKMad17H0JiBwDmkyx6nv1f6J7NskGSZTESO/OaZCqD2gCKZo/wH1U2z2LZmcVeoHQSSR79dx5MsRnfjOvZrwPcSqTpW7uIyNa3G1zLVCwS6J+rSS0mOSF/iN5p8e5B+gEWrj71XJUql6q7egsxiRna3qLHDtB1B8FtICIiAiIgIiICIiAvOeaGtDPYmcGwwRSTSuPJrI2lzivRQL2hZxsNZmErvHTWgya9unjHXB1bGdOt5Gp7h+sgrnIW7GSvXbm6TPetPkjZzO/M/djjHhq1oV64mgzGYzGY9umlSrDA4j6z2tG+7zOp81VewuIOSzTLkjdamILbDyeT7btehZ5cXnwHariQEREBERAREQNE0REDRNERA0TREQNFWe3+zxildnakZ6KUtbkmNHCOTg1tjQdTuAd36H6x0sxfMkccsckUrGvjkY6ORjwHNexw0LXA8ND1oKf2Q2n/AVh1W4534LtSB0p4n5LMeHTAc90/XHn1aOuBjmSNY9jmvY9rXscwhzXNcNQ5pHDQ9Sp7avZSxg5ZLdVj5MTI4Fr9S51Rzj+blPPd+y7yPHi5sztfcwZZUsh9nF7x+aB1lranUmuXcNO1pOnYR9YLj0TRamPyWOyldlqhYjnhdwJYfeY7rbI0+8D3ELbQNE0REDRNERA0RFFtotssZhhLWrblvJDVvQsd81Xdy1sPHZ9kcfDXVBu7R7Q08BTMr92S5MHNp1teMjx9d+nEMHWfLmVTROTzORAbvWclkrB3QeG/K/iSdOAY0cT1ADuWbVvJ5i/0sxmt37kgjiYxu897vqxxMHAAdQ5Dn3q1dkdlI8FEbdzcky9iMNlc06sqxHQ9BCf53dZHYEHWwGFr4LGVqER33t1ltTaaGey/QvkPd1DsAA6l1dERA0TREQNE0REDRNERAREQEREBFlYQEUfze1uDwm/FJKbF0DhVqkOe09XSv+i3zOvcVXOW212iym/HHN8hqnUdDSc5r3N4/nJ/pnv03R3ILPyud2cxzJYclcrauY5r6ugnle1w0LXQsBOh7xoqay78BJce/CQ3IKjtSYrZjIa7X/shpLg3uLj6cB54/F5jLPLcbRsWve0fKwBsDXH7c8mjP8RKmOP8AZrfk3X5TIxQDgTDQZ0smnWDNMA30YUEOx+TyWJsC3QsOglA0f1xyN57srD7pHj8OatfZja+ttADA+vJDdjaS8xRyyU5AOZZOBug/qk69hK9aGxOyVDdd8gFqVvHpMg82Dr+w/wCbHkxSJkccTWsjYxjGjRrWANa0dgA4IPpERAXnNLHBFLNJvCOJjnv3GPkdutGp0ZGC4nuAK9EQVRtDt5evOmpYoS0qw1ZJI8Fl2UcjwPFg+PeNdFClf93FYjJN3b9GrZGmgM0THPb+y/TeHkVFr3s5wM+86jYt0Xk6hu98ogH3Zvf9HoOLsflth8U0GZtmDJyt3Z7t2MSMIOnzcL4dd1ndujvJVlV7NW3E2erPDPC76MkD2yMP3mkhVFkdhNqKAc+GKLIQjU71J2k2naYJND6OcuBWuZPF2XOqz2adqM6SNaXxPGh+jLG4cR3FqD9BIq2w3tFkbuQ5uuHN4D5XTbo4d8sHLzafJWBTvUMhAyzSsRWIH8nxO1AP2XDmD2ggFBsoiICIiAiIgIiICIubmMzjsJUdbuSaa6thiZoZZ5NPoRg/E8gg27dynRry2rk8cFeIaySSHQDuHWSeoDiVV+0G3d++ZKuJ6SnT4tdPru25x3EfQHgde8a6LgZ7aHI5ywbFx4jrxE/J6zCehgaf4uPWSOPcOAkGzewlrIiK7mRLWou0dFUBMdqy3qMp5saez6R/V6wjGLxGYzc7ocbWdMWu0nmedytCTzMspGmvcNT3Kx8N7PcPT6ObKu/CVoaO6N4LKUbufuw66u+8T4BTCrUp0oIqtSCKCvE0NjihaGMaO4D4r2QfLI44mMjjYxkbBusYxoaxo7A1vBfSIgIiICIiAiIgIiIC52TwuGy8fR5CnFMQNGSEFs8f7ErNHj1XRRBVWb9n2Rph8+IkddrjUmvJutuMH6pGjH/A9xUVoZLK4e06alPLWsMd0czCCA4t5xzxP4HwI1Hcr/0XBz+y2JzzC+VvQXmt0iuQtHSDTk2VvAOb3HyIQaOzm2mPzJjqW2sqZJ2jWRl3zFk/1D3cdf1Tx7NeqWKhcxhcpg7Ir3otA8k1549TBOG8d6N3aOsHiPiZjsptu5rocbnJtWOLY6t+Q8WnkI7Tuzsd6/aQWSiIgIiIHos+iwviWSOGOWaV7WRRMfJK950axjAXOc4nqA5oNPLZWlhqM1627SOPRsbG6b80rgd2KMHrP8ATyCpLMZe/mrsly24lziI4IY95zYWE6NiiaOJJ8NSfQbu0+0EudvvmDnMoVt9lKN503Y/rSvHLedpqewaDq1Mt2G2VEbYM7k4vn3jfxleQfmI3DhYe0/XcPo9gPa73Q9dkdim1Ogyuaia67wkqVH6OZT6w+QcjL8G9XHiJ6iIHonoiIHonoiIHonoiIM+ix6IiB6J6IiB6J6IiB6J6IiB6J6IiDUyGOoZSrNSuwtlglA1aeBa4cnscOIcOohU3tJs1d2fsAOLpqE7nCrZ059fRTacA8DyPMciG3eta9Rp5GrYp3Imy1527j2nn2hzTzBHMHqQV3sVtaYHV8LlJfmHFsWPsyH8048BBK4/VPJh6uXIjds1UTtBgrWBvPqT6yQSB0lSfTQTw66cdOG83k4efJwVhbD7SOyVc4u7JvZCnGDFI8+9arD3Q4n7TeAd28D1nQJr6LHoiICr72h5wxxRYOu/35w2xfLTyh11jiOn2iN49wHU5TyxPDVr2bM7t2GvDJPK7sZG0vcVQV+5cyt+1ce0vtXrOrIxqTvSODIom9fD3WjwQd3YzZ8ZvImxZZrjca9kk4cPdsWfpxwceofSf5D6yuVcvAYmHCYqlj2aF8bN+zJ1y2ZPekefE8u4DsXUQZ9Fj0RED0T0RED0T0RED0T0REGfRY9ERA9E9ERA9E9ERA9E9ERA9E9ERA9Fn0WEQcfaHCQZ3HTVH7jZ2ay0piOMU4HDU8908ndx7uFLV58hh8hFPGHQ3sfYdqx+o3ZIyWPjf3Hi09xX6BVYe0TDiCzWzELAI7ZFe5ujgLDG6sef2mjT7vegsPGZCtlaFPIVj81ZibIGn6THcnRu72nUHwW56KtPZvlSyW/hpXe7I03qYJ5OboyZg8fdd6qy0ER2/vfJcE6u12kmQsRVtOvomfPPI9AD+0oRsLjxf2hryvGsOMhfedryM2vRQj1Jd91dj2l2HOuYSrrwiq2LB8ZpGxj+Urd9mdYNp5y6QNZrkNVp/VgiD9PV5QWAiIgIsrCAiIgIiICIiAiIgIiICIiAiIgIiICIiAuVtBjhlcNlKWmskkDnwcNSJ4vnI9PMAea6qIKCw192My2Jv6kNr24jL/YyHopQfukq/fNUFnarauWzlRo3WR3bbIx2Mc8ub8CFduFsm5h8LaJ1dPj6kjzz98xN3uPjqgrX2jFxz1YHkMXX085piVKPZyANnpCObsneJ8QWD/RcD2lQObksTa09yajJADp9aGUuP84XV9mlpr8dlqeo3698Tgf1diJoB9WuQTxERAREQEREBERAREQEREBERAREQEREBERAREQFhZRBSW2IA2mzmnXNAfM14iVZ2x/8A4Y2c/wDQxj0JCqTaK2y1mc7ba7ejdcsbjhydHEejaR4hquXZ2saeBwFZ3B0WOqB4PU90Yc4epQcnbrFPyOFfPCzesY2T5WwAEudDu7srQPD3vuquNmc2cFlIrbg51WZvye61g1cYHEESNHWWHiO7UdavLTVVLtdsjNi5ZsjjonPxcjjJLGwEuouJ1OoHHo+w9XI8BqgtaCeCzFFPBKyWGVjZIpIyHMexw1DmkL01VHYPafMYI7taRstN7t99SfUxEnm6Mji0+HmCrDx23+zlsNbbM1CUgaiw0yQ6n7MsQPxaEEu1TVa9a/jroDqlyrYGmv5PNHJ67pK2EDVNURA1TVEQNU1REDVNURA1TVEQNU1REDVNURA1TVOCIGqaoSACSdABqSeAHmVyLu0uzNAH5TlKgcNfm4X9PLr2bkO874IOvqoztftFFhaEkMMg/CVyN0dZjT78THatdYcByA+r2nuB0j2W9oxc18WFquYTqPlV0N1b3xwNJHgSfJQQfhTL3g1osXslcfru678sh5bzieAaO06ADsQe+Cxb8zlsdjmgmJ8jZrZH1KkJDpCT38Gjvcr6GgAA0AHAAcgFHNlNmYtn6j3SlkuSthjrkzeLWhvFsERPHdbx49Z49wkiAhAOo4cdeaIgh+Z2CwmRdJPSc7HWnEuPQNDqz3Hjq6AkAfdLfNQm9sNtZSLjHWjuxjk+jI0u074pd1/pqrmRB+eLFW7TfpaqW6zx+kQSwnh+s5oHxXtXzWYg0bWy16MfZiuTAf3Q7T4L9AaB2oIBB5g8QufcxWGmjkdNjaEjjzdJVgefVzUFPx7V7WxfRzFs/wBp0Un/ANjCthu2+2TeH4T1/aq1D/8AmvfaOpRrySCvVrwjeA0hijYOY+yAo0QOwIJD+Pe2P6dD+6V/9qz+Pm2H6ZB+6Q/6KNFfKCTnbvbH9NhHhUr/AObVj8e9sv06H90r/wC1Rsc04IJH+PO2f9Is/dKn/Gn487Z/0iz90qf8ajwA05BNB2BBIfx52z/pFn7pU/40G3O2Q1/6hGfGpV/yYFHtB2BYIGqCR/j3tl+nQ/ulf/as/j3tjw/LIP3SD/RRrgvlBJzt3tj+mQDvFSD/ADCwdutsj/5+MeFSt/mwqMr70HDgg7rts9sX8DlZB+xBUb/CNaku0u08mvSZrIAde5YdEP8A491akDWOliBa0guAIIBBCs7ZzE4SWNjpcZj5HcPekqwOPLtc1BVUt2xadpNbmsPJ10kmkmcT4Ekrep4LaK9uiniL72u5PfCYIv79jcar2hq0q40r1q8I7IYmM/lAXr1IKsxvs3ysxa/LXYakR0LoaXz9gjsMrwIx5NcrAxGCw2EhMWPrNjLwOmmcS+xMR1ySu94+HLuXTRAREQf/2Q=="
              alt=""
            />
            <p>{data.username}</p>
          </div>
          <div className="admin_quantity">
            <div className="middle">{Math.ceil(data.orders.length)}</div>
          </div>
          <div className="admin_price">
            <button
              className="admin_edit"
              onClick={() => handledelete(data._id)}
            >
              {" "}
              Xóa{" "}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminPage2;
