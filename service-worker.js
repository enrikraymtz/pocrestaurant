/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/3rdpartylicenses.txt","004bc0dbf1a11123935e1d1e6d501026"],["/assets/css/dragula.min.css","54ea3ce489540d9bfa1c3150869232be"],["/assets/faces/m1.png","c2235feb1539f53a7130cb1cbf349d44"],["/assets/faces/m2.png","8f0a2d593127d6c43028bd6fed3fb88e"],["/assets/faces/m3.png","27bf12f9eebc65a9c3f280f7fe2ac719"],["/assets/faces/m4.png","040d65ce51f43aa4de0a06d47166a25c"],["/assets/faces/m5.png","0c7495de51009eee6a4d1dc962752ca3"],["/assets/faces/m6.png","af3552ab559b2448af48d6153b368262"],["/assets/faces/m7.png","835b96bdfe345056e7478317b3569f97"],["/assets/faces/m8.png","4ce56e74c5cf59fcc05e584f963fe0c1"],["/assets/faces/m9.png","9d86cd01c80020bab96a077e3723965e"],["/assets/faces/user.png","cb82ab5d792cb77eb88b2decab7250dd"],["/assets/faces/w1.png","cafc7c2b1d3d36cb53b6accbb1fec4e7"],["/assets/faces/w10.png","8f91595b6d60eeca5616c9c4dd03d038"],["/assets/faces/w2.png","3da7df424ecb025c62cab4225c96ffb4"],["/assets/faces/w3.png","2403827e2ce8a2246891b660a4e319f3"],["/assets/faces/w4.png","0f828109012bd898a2140e7af380b75a"],["/assets/faces/w5.png","c74e3a9b315fd037907e5ce554f67aea"],["/assets/faces/w6.png","c14e93c1f082892fd16380378443cc23"],["/assets/faces/w7.png","2aafe5a57c296305fbb6838088ee8d48"],["/assets/faces/w8.png","a4c352024ece4d6db10a1fcce461b5cb"],["/assets/faces/w9.png","d7473ce50f548312e666696ee25e43cf"],["/assets/favicons/android-chrome-192x192.png","bca4fd84a11e222b1f1b5e172cd112ce"],["/assets/favicons/android-chrome-512x512.png","07a1d6cf42a9bc4ee165d7432669cfdb"],["/assets/favicons/apple-touch-icon.png","af1e6f16c3bf5dd347dcb8420a3827c1"],["/assets/favicons/browserconfig.xml","389eabe3c9a90736f426109c84458455"],["/assets/favicons/favicon-16x16.png","a4e919deef07a0c66968020d4b2ad307"],["/assets/favicons/favicon-32x32.png","167f3fca5e3683ca7b3dcfdc9ae1e564"],["/assets/favicons/mstile-150x150.png","54f7a8949e96b80db6e01ca6a05f7c26"],["/assets/favicons/safari-pinned-tab.svg","cc6d7a45f7e8181f1ded638936d1338a"],["/assets/flags/1x1/ad.svg","0235a8b41c610e83a8b1b4db97fc0bd6"],["/assets/flags/1x1/ae.svg","26b416b372518cfbc68b4e9dcc805c93"],["/assets/flags/1x1/af.svg","1977256d32438d0c439c52e8f49cca95"],["/assets/flags/1x1/ag.svg","542abb1ec9ce6cf94a7f649ca1a2d4da"],["/assets/flags/1x1/ai.svg","1db2f0ac0fce2ff2e8f46b3f0b2496f0"],["/assets/flags/1x1/al.svg","522e44372f92166904df493dde2ec37d"],["/assets/flags/1x1/am.svg","6f07f394efccb755a2b2ec83b058f9ca"],["/assets/flags/1x1/ao.svg","6b45659aa10252f0b1da4da9597057e6"],["/assets/flags/1x1/aq.svg","6c3bb044ff45f4cf4091fbc1575c64b5"],["/assets/flags/1x1/ar.svg","1afa37cc1e8232409d31fe2eebdc26b6"],["/assets/flags/1x1/as.svg","b7d95238abaf4653e8aa5aa50efa5a98"],["/assets/flags/1x1/at.svg","1515850a3002c768aaf2370f7daa5bf1"],["/assets/flags/1x1/au.svg","ff7304e74e8b30de35bca999e0bf039e"],["/assets/flags/1x1/aw.svg","9d511fc5e72ea3e8462457c088a4ced6"],["/assets/flags/1x1/ax.svg","938a42b71389b25d2f9290d93c2eef3d"],["/assets/flags/1x1/az.svg","8901c8a103b570b3f1694786d929e4af"],["/assets/flags/1x1/ba.svg","3e249f152b5cb4eaa08fad0da6bc752f"],["/assets/flags/1x1/bb.svg","6f3617a0f639a00b1ca67bce39489682"],["/assets/flags/1x1/bd.svg","68a16d1db6d32f2384ff5e236d1ea8b0"],["/assets/flags/1x1/be.svg","2e239fb36fe1a8f76f38c551c32771db"],["/assets/flags/1x1/bf.svg","b560ecb4a602a787e69254f9279fba6f"],["/assets/flags/1x1/bg.svg","54c535b8b2776257e12ae65951e478e4"],["/assets/flags/1x1/bh.svg","b315340262f00f9457ff4d490127ec76"],["/assets/flags/1x1/bi.svg","a8d2c960daaf9aed9768aaba30e94fd0"],["/assets/flags/1x1/bj.svg","d39e6b2298c4a4f4f82bb816b7fbe04a"],["/assets/flags/1x1/bl.svg","f5beea66718156407162e892babe2579"],["/assets/flags/1x1/bm.svg","8f695fc2022c9871bcc4072242b88d70"],["/assets/flags/1x1/bn.svg","84fd1c5c0de64c90075a461247eaf121"],["/assets/flags/1x1/bo.svg","145baf1335a20828978a615a051599ef"],["/assets/flags/1x1/bq.svg","d7b3a9a83e29340b46f4f08058af7469"],["/assets/flags/1x1/br.svg","f07af81f0d9d8087f8403ec3e19f5b1d"],["/assets/flags/1x1/bs.svg","4c341ba50fb2faedde83ed28b332a591"],["/assets/flags/1x1/bt.svg","5737d52d2af3d6917a09355e64451167"],["/assets/flags/1x1/bv.svg","057311b13bf4963961ffc4a369a1810d"],["/assets/flags/1x1/bw.svg","16a504630f91dccafb55ed102bc1fb62"],["/assets/flags/1x1/by.svg","8b483f592507cba2f8ef855c692a43aa"],["/assets/flags/1x1/bz.svg","90f63e0d49ee037596dc6504c2993344"],["/assets/flags/1x1/ca.svg","fb0f4ca1ce6a2f10bc67c815af9d8e57"],["/assets/flags/1x1/cc.svg","69151469dfbb33bab62ba68932b5b671"],["/assets/flags/1x1/cd.svg","1cd7f4fa9eb5f6ffa556366d8409e27e"],["/assets/flags/1x1/cf.svg","ef407e6400dba26a627619d5c4aa9179"],["/assets/flags/1x1/cg.svg","188820e6c3b390f2b0d19b6fb1b4cfb1"],["/assets/flags/1x1/ch.svg","4fbd51ff155a4b15d7d5556b2fe80823"],["/assets/flags/1x1/ci.svg","c87c3a04def7e5adfcdd927c0a653eb1"],["/assets/flags/1x1/ck.svg","5ed6ae63047821a1bead60df847d5345"],["/assets/flags/1x1/cl.svg","34431474ce3af0cb06cdb311d630958f"],["/assets/flags/1x1/cm.svg","79dd956a2b49750bd2a4e64a9d259b27"],["/assets/flags/1x1/cn.svg","862c6bed4fe87e82079f1a6b19aa4540"],["/assets/flags/1x1/co.svg","4fd35c4ff83d8805bacf709b0b3cef04"],["/assets/flags/1x1/cr.svg","85dc6c184284a8ae9a21a236c2e5ff0b"],["/assets/flags/1x1/cu.svg","49c6d834d0464a4fc8265895de84307d"],["/assets/flags/1x1/cv.svg","9d29cdfcb20eeba70a1843c5c0e69aef"],["/assets/flags/1x1/cw.svg","7666dccc068e981266c05f4611aa364c"],["/assets/flags/1x1/cx.svg","2f022931f0d2dcc3e55c2ef5fd453f03"],["/assets/flags/1x1/cy.svg","0135004fd3577dc1252f7a079a8a3205"],["/assets/flags/1x1/cz.svg","7cc1738722f3645db046d2f9b0122d76"],["/assets/flags/1x1/de.svg","53b1dd98bfdac1c1e2b4d4e89326ac9b"],["/assets/flags/1x1/dj.svg","f172feda865fd7fc069e47e74c18c629"],["/assets/flags/1x1/dk.svg","4bf923a34f7b0f6f146cb60efe8472fa"],["/assets/flags/1x1/dm.svg","5f4bd3f2ce0587bc7b71b1113509bdd2"],["/assets/flags/1x1/do.svg","9deab3811e118a2c69821789b9192f5d"],["/assets/flags/1x1/dz.svg","6e27d9a6ea4509e3f13e7adba9b29fd4"],["/assets/flags/1x1/ec.svg","23b121f889992270e275a5b6479b482f"],["/assets/flags/1x1/ee.svg","2b3fa9b830c224370e0235d4dc54f19e"],["/assets/flags/1x1/eg.svg","77361068fd85ca205be2977a0efa1341"],["/assets/flags/1x1/eh.svg","96dcc5937300a2af951b26b538ad6116"],["/assets/flags/1x1/er.svg","ca7d6c82bc63388ba9807786a3fe046c"],["/assets/flags/1x1/es.svg","fc7d413dc65cc80d81ce937b441d2487"],["/assets/flags/1x1/et.svg","ce05375717af225c8c9de74255369076"],["/assets/flags/1x1/eu.svg","a82164bef7b3b68dd236d628f10f0732"],["/assets/flags/1x1/fi.svg","7e348f344a4508f6e492a17e90162dc2"],["/assets/flags/1x1/fj.svg","c7c3ed3de301d49b6f852d7b485191de"],["/assets/flags/1x1/fk.svg","0b58123438bf08050ea73c721883e810"],["/assets/flags/1x1/fm.svg","7d7e5ce63374896f4e1b557a0beeeee4"],["/assets/flags/1x1/fo.svg","463051b573c0fa441940a35245221b84"],["/assets/flags/1x1/fr.svg","f5beea66718156407162e892babe2579"],["/assets/flags/1x1/ga.svg","61155b4357352fd32f23363d9eef706b"],["/assets/flags/1x1/gb-eng.svg","c650765fa2805957ec40245b56bc3935"],["/assets/flags/1x1/gb-nir.svg","ce18a5009b96fa18834d1bf354ddbbb5"],["/assets/flags/1x1/gb-sct.svg","d1a72ced9fc79506963a5ddb14a882cb"],["/assets/flags/1x1/gb-wls.svg","45aa36d763c5efb36f4e715bac086d61"],["/assets/flags/1x1/gb.svg","dc09da5b9405a5ea09ae820549fcf097"],["/assets/flags/1x1/gd.svg","cd82a5cb8e7cab4b4cbd2c47aba8bbd2"],["/assets/flags/1x1/ge.svg","b1a3ed1fe11e4e6945a721f34bf806c2"],["/assets/flags/1x1/gf.svg","99ef92610c9b3bfae4b726557d9a15d9"],["/assets/flags/1x1/gg.svg","c0900210dc95690f8b8af6818dd47636"],["/assets/flags/1x1/gh.svg","81d371037ba7eeced62a89309f1bb6bc"],["/assets/flags/1x1/gi.svg","b9ee5df15f4a2a5e22932adce0aa41b5"],["/assets/flags/1x1/gl.svg","1e6cd6004dad778b01f84b3436e4f878"],["/assets/flags/1x1/gm.svg","94db794cf2ee67a3e96382ccb5b7f69a"],["/assets/flags/1x1/gn.svg","4b32fe4196e05452155185c8edd10500"],["/assets/flags/1x1/gp.svg","f5beea66718156407162e892babe2579"],["/assets/flags/1x1/gq.svg","2c3f4c5a782b2bc84934b3a415a17858"],["/assets/flags/1x1/gr.svg","e7d896e8d4c7f739673315303ee0b730"],["/assets/flags/1x1/gs.svg","6c138261aab59b31993415f8d089b272"],["/assets/flags/1x1/gt.svg","daa9b00495abab81cd26138fae628736"],["/assets/flags/1x1/gu.svg","6dd3e181453de7bd717c5c9867a6e477"],["/assets/flags/1x1/gw.svg","2c8da4be311948dd4b344da5c9fa9599"],["/assets/flags/1x1/gy.svg","7d0c862b2a1a8643db618e89452e1435"],["/assets/flags/1x1/hk.svg","4553b614d26705b5450b7ce6450d58dc"],["/assets/flags/1x1/hm.svg","ce03f25ae06039fb2950e48ae1351253"],["/assets/flags/1x1/hn.svg","3584ed818a2435d2d8c493c72c0e9505"],["/assets/flags/1x1/hr.svg","8d697677d5a1c8eb2408a08d76111929"],["/assets/flags/1x1/ht.svg","6738231e2cbcbbc4747dc28de165c94c"],["/assets/flags/1x1/hu.svg","eccfc345a272ec5c30cb0013d33d4f8d"],["/assets/flags/1x1/id.svg","1d8fdb82a99639269d54c35836273f33"],["/assets/flags/1x1/ie.svg","f04ae19676ac49e20b64d5477050123a"],["/assets/flags/1x1/il.svg","c19e7ed639781cce04c0149ab82bb4f8"],["/assets/flags/1x1/im.svg","fbc736d8eef8aa0dc9f334d69368ab36"],["/assets/flags/1x1/in.svg","14ad749ffe45a7234833a2cb247984c5"],["/assets/flags/1x1/io.svg","b21c04107b44604cf21f3c2c2a3dfe8d"],["/assets/flags/1x1/iq.svg","89545ebbd9b7694de28eee519b21b03d"],["/assets/flags/1x1/ir.svg","df8670230c49f9955a22883a2a62fc25"],["/assets/flags/1x1/is.svg","1eb63a506118541e3c60d5201734fd18"],["/assets/flags/1x1/it.svg","f92f856e711b48052e8be80544b23f2d"],["/assets/flags/1x1/je.svg","800f0c2a0d60323f004859dcb5139f6c"],["/assets/flags/1x1/jm.svg","b0e93cd8224c77296d5bafae4290ad30"],["/assets/flags/1x1/jo.svg","882a2b578538a7508149c81ed9a17893"],["/assets/flags/1x1/jp.svg","8420d69ff6cbe613d0bc1538aa69f4ce"],["/assets/flags/1x1/ke.svg","c5c57643122ffd79fd7e8443727903e6"],["/assets/flags/1x1/kg.svg","87c1f44e9d68172262011ebd1b0d6b20"],["/assets/flags/1x1/kh.svg","63493572f921ffb70494755e5c6dbcf6"],["/assets/flags/1x1/ki.svg","edbc2da4c30084a31455852526aab84a"],["/assets/flags/1x1/km.svg","697729eaf810853bfbd7af7bb5c276f2"],["/assets/flags/1x1/kn.svg","81afe0ffec019498730386a6b8ee2e60"],["/assets/flags/1x1/kp.svg","292a98a4e4b602d2084ebba7a5c3edcf"],["/assets/flags/1x1/kr.svg","ae853897d074372f7324582206d2d07e"],["/assets/flags/1x1/kw.svg","596969a5309a844ff7da2c499784a371"],["/assets/flags/1x1/ky.svg","ecd9a0bee76f26e87cfebc658da1d414"],["/assets/flags/1x1/kz.svg","d191308efd358be0f2836c4075c9f324"],["/assets/flags/1x1/la.svg","1bb7eb816750af22ab00a08f06ce3263"],["/assets/flags/1x1/lb.svg","28934b7f5bd0a1d590c1ca3ff6c4c3a6"],["/assets/flags/1x1/lc.svg","a050ff278fe24385899bcaefc4925bf1"],["/assets/flags/1x1/li.svg","08234ab6d6450788abf3e7c0c9b3ea79"],["/assets/flags/1x1/lk.svg","0f1c9b4b9d48f2b18d49bce09b1465a7"],["/assets/flags/1x1/lr.svg","eba1c13c5170e4019e5a73c592a6df93"],["/assets/flags/1x1/ls.svg","c075a2c18dea5fcc46f1229165a8b058"],["/assets/flags/1x1/lt.svg","80d574bce22483bc6e45b550f2b9e0d8"],["/assets/flags/1x1/lu.svg","b4178782401ba5af813e6164e4ef2837"],["/assets/flags/1x1/lv.svg","f85a58b46d3990fbe541123f2d9ac837"],["/assets/flags/1x1/ly.svg","d15f2b4ca3895313c2e037af9b82d3f5"],["/assets/flags/1x1/ma.svg","4dd2db703ccbcb5d69c5e8ab714c608f"],["/assets/flags/1x1/mc.svg","15f5e52fe5086163c4e20545d0665f16"],["/assets/flags/1x1/md.svg","ebe3f43642af6dcfc563fa5010b61fc8"],["/assets/flags/1x1/me.svg","2ca8d0daf46e041a3e2bacb216b85fab"],["/assets/flags/1x1/mf.svg","f5beea66718156407162e892babe2579"],["/assets/flags/1x1/mg.svg","703367d15bcc1eb2d1f88a5e7631a112"],["/assets/flags/1x1/mh.svg","86fa77ef55778f5634b477288a72fe68"],["/assets/flags/1x1/mk.svg","26568ff2bb987698a77776c33e80cd36"],["/assets/flags/1x1/ml.svg","30ef8b7a6af81cee0cac8c047d3888b6"],["/assets/flags/1x1/mm.svg","85b47d4e8528f8a85e900fb6f083e611"],["/assets/flags/1x1/mn.svg","60606fbda331e8d14f46f95cc3ee661d"],["/assets/flags/1x1/mo.svg","141345c7e3b29f4d6cd34ddea1c21e9c"],["/assets/flags/1x1/mp.svg","33adb7c8aed76dbb0b58617903125de0"],["/assets/flags/1x1/mq.svg","f5beea66718156407162e892babe2579"],["/assets/flags/1x1/mr.svg","705880b66080fe3282d7555c6f7f3ad0"],["/assets/flags/1x1/ms.svg","933811743ecce4b1650e8629896a63ea"],["/assets/flags/1x1/mt.svg","2c620d6d12847d9028c90a9463247dc3"],["/assets/flags/1x1/mu.svg","52987c34335845f4da5e2695351e7134"],["/assets/flags/1x1/mv.svg","840dc4e5fd162efe2548df818592c18a"],["/assets/flags/1x1/mw.svg","eb2de7f4e3ac8f8c765370f223e09f9b"],["/assets/flags/1x1/mx.svg","289f165b1f7d1ba59caae578d7a40a29"],["/assets/flags/1x1/my.svg","474e48006edb326d0f136355a48aa8a4"],["/assets/flags/1x1/mz.svg","fa350e72d144502328e3bc292537f67b"],["/assets/flags/1x1/na.svg","9515aca1e49b9b5f72c01a203e95e67a"],["/assets/flags/1x1/nc.svg","f5beea66718156407162e892babe2579"],["/assets/flags/1x1/ne.svg","b4d519bbfd9429eadc54d4159d27b948"],["/assets/flags/1x1/nf.svg","d3139d5d52bea19cb34559da0c026c74"],["/assets/flags/1x1/ng.svg","d7ccc63be34b79d90b3de883cc387eeb"],["/assets/flags/1x1/ni.svg","de05d57603caa70a27d5a00ddb73faec"],["/assets/flags/1x1/nl.svg","5510575676c86a640e44a81d2d4a371e"],["/assets/flags/1x1/no.svg","d748f0d9f64c0ca1a40a0f6ec6bbb746"],["/assets/flags/1x1/np.svg","fbf726f3b90b19e9bab17d5c507ebdaa"],["/assets/flags/1x1/nr.svg","9b3f222968cb2f20756d81eb9690d5ce"],["/assets/flags/1x1/nu.svg","f81a779d053eb6cb15fc26c7134fec2d"],["/assets/flags/1x1/nz.svg","7a1710379e7cfa59204d7a195adb7b22"],["/assets/flags/1x1/om.svg","fd45ff44475a9964e4edf984886ac0f9"],["/assets/flags/1x1/pa.svg","d0fb63c7f6cb337ed39cc1c5e22f0b35"],["/assets/flags/1x1/pe.svg","2a9bf478c6593ffeae4fcf3ea5ce205e"],["/assets/flags/1x1/pf.svg","28905a2e709f0380d8e943e9d593b26d"],["/assets/flags/1x1/pg.svg","00d75c0c3f009fbd83d2af05597a8e8e"],["/assets/flags/1x1/ph.svg","afaed3ed049eec401b7470a647392dd0"],["/assets/flags/1x1/pk.svg","a7e60bb258abaaac3768d770e0e28451"],["/assets/flags/1x1/pl.svg","9510ea741dfe5800af84eef33c5cdfaf"],["/assets/flags/1x1/pm.svg","f5beea66718156407162e892babe2579"],["/assets/flags/1x1/pn.svg","0c94bc025f022b95800f045153a2b876"],["/assets/flags/1x1/pr.svg","5052a9ee45cd3d8381a56b83fd07e260"],["/assets/flags/1x1/ps.svg","5bccb8f945a4d71c29e3a1c3e7374913"],["/assets/flags/1x1/pt.svg","1e25fb3d45cf9d63d17168e5f2ba7fe8"],["/assets/flags/1x1/pw.svg","875ce4a918d138bec98e5643230a7dfb"],["/assets/flags/1x1/py.svg","1b9acae82afab1dfe43758c51accfc0e"],["/assets/flags/1x1/qa.svg","599a0d9907f7d54907ce444af8b28f82"],["/assets/flags/1x1/re.svg","f5beea66718156407162e892babe2579"],["/assets/flags/1x1/ro.svg","ad29e50e8e9c1510f13404306ad7d690"],["/assets/flags/1x1/rs.svg","67ed3103e1c28facf840deb6c6158673"],["/assets/flags/1x1/ru.svg","b8261ddf4f58ad2d4dc31c29223ca7c3"],["/assets/flags/1x1/rw.svg","643ab7dfe8e8e538bc7029a434296a41"],["/assets/flags/1x1/sa.svg","997f908c7f53417d80fde92234ae732c"],["/assets/flags/1x1/sb.svg","ccf698badb509b1f35eb661fc8e5c1e8"],["/assets/flags/1x1/sc.svg","5960ca059c07aceb76a42d219b40c257"],["/assets/flags/1x1/sd.svg","3a5f806fc51fee6ce4ea655219cd63c7"],["/assets/flags/1x1/se.svg","eff4eae1d096c7c14a84fde4a11cc036"],["/assets/flags/1x1/sg.svg","ff07e5d30495f3caea782287200dbb5d"],["/assets/flags/1x1/sh.svg","a6507cfc594138b6651015f252fbd688"],["/assets/flags/1x1/si.svg","1f2b6a3b9ca04be5a37cc6f046c2048e"],["/assets/flags/1x1/sj.svg","d748f0d9f64c0ca1a40a0f6ec6bbb746"],["/assets/flags/1x1/sk.svg","0b837ccb90b893d1a8544be87b45e2eb"],["/assets/flags/1x1/sl.svg","57a71f7fc32c1e818cbc22c183a0060b"],["/assets/flags/1x1/sm.svg","bd33ac470832c15f445b7b82c2871a78"],["/assets/flags/1x1/sn.svg","8d76cbaf58eee8efeb376e6c6f410ad8"],["/assets/flags/1x1/so.svg","326dc26ee9ac263fc4ffa3b9eff12de5"],["/assets/flags/1x1/sr.svg","60804d4e370cc66a81b1bfd8d0194939"],["/assets/flags/1x1/ss.svg","2c48d5ec542e43b968e19bd8e1420728"],["/assets/flags/1x1/st.svg","9175294857a834a5f8830bc967c6e9ab"],["/assets/flags/1x1/sv.svg","4c27c3e03f8a6827d6b9f5619d53a3d2"],["/assets/flags/1x1/sx.svg","d77f61d861fd7e34301ad9f6d171d66c"],["/assets/flags/1x1/sy.svg","859efa28936a730d6a1b34f42ea72efa"],["/assets/flags/1x1/sz.svg","82fa14bb34ba27bf2af5d26cb4fb2559"],["/assets/flags/1x1/tc.svg","3c20f6df73c09f53547fa13cee5d7a5d"],["/assets/flags/1x1/td.svg","b90809e15b35e652f8936c32134f5291"],["/assets/flags/1x1/tf.svg","02538c8e9d95469998dbb9104b27326a"],["/assets/flags/1x1/tg.svg","8c3cad77b8e62ed3bca1613cdcc0ee20"],["/assets/flags/1x1/th.svg","5b62c3068537e4c1001fd928366a2eb2"],["/assets/flags/1x1/tj.svg","75c420e93df43ba02c9f21156323fddf"],["/assets/flags/1x1/tk.svg","489e194c7c04fe49be12c103679749ab"],["/assets/flags/1x1/tl.svg","60cca0932810ddc48a99530a899ae047"],["/assets/flags/1x1/tm.svg","22835fd9f1bfae2cbf1ff88422b3e7a9"],["/assets/flags/1x1/tn.svg","f0a30981087e15fd0d76700eebce56ba"],["/assets/flags/1x1/to.svg","4d567a690404c03c2082e386b5542415"],["/assets/flags/1x1/tr.svg","3861ade0752f068c7bd568e21832816e"],["/assets/flags/1x1/tt.svg","4365fc9d9cbcb19451870cba322afd8c"],["/assets/flags/1x1/tv.svg","d91ede3e3d052aa5327ad43e57de4a95"],["/assets/flags/1x1/tw.svg","c32c59808c7618ded7526fb68ea380d0"],["/assets/flags/1x1/tz.svg","5e601327c8f84acc76b6e35f4cc3a37c"],["/assets/flags/1x1/ua.svg","9662131f4f0a53d3f68fa2bd111dead5"],["/assets/flags/1x1/ug.svg","d3c2ae8b20f90ec3ccd57291fd99613d"],["/assets/flags/1x1/um.svg","27344d8bf35c9a284b5832fb0594c2e9"],["/assets/flags/1x1/un.svg","5dc5f606615c119072e28885ceea7d29"],["/assets/flags/1x1/us.svg","1067e4f544573a808db9cf39397e3b8e"],["/assets/flags/1x1/uy.svg","94e576aa509ef694ad629e96ea455d54"],["/assets/flags/1x1/uz.svg","ad760e88611b4d3215de6a7901c0e134"],["/assets/flags/1x1/va.svg","b0a8ba44a1521e17bce0b4fcd9ab2828"],["/assets/flags/1x1/vc.svg","d1b85cb2907acd224fed87c301e246bd"],["/assets/flags/1x1/ve.svg","974f2df242a168ed163cf7c41019cf76"],["/assets/flags/1x1/vg.svg","328b83d00e1371c7df7c31ce24897b98"],["/assets/flags/1x1/vi.svg","ee643395cce51b2233ea889be5c12f90"],["/assets/flags/1x1/vn.svg","dc03080754ad15a406040c271b7b376b"],["/assets/flags/1x1/vu.svg","7bef82e6203c6c67dbd3e91119acbc1f"],["/assets/flags/1x1/wf.svg","bc85b58ae93c7188fd14a0178a982341"],["/assets/flags/1x1/ws.svg","4c452012911dc6d3f7203d56b8a80544"],["/assets/flags/1x1/ye.svg","a2b66a6bc7ba8a41ee8d5f3c79aec3c4"],["/assets/flags/1x1/yt.svg","f5beea66718156407162e892babe2579"],["/assets/flags/1x1/za.svg","3c8733a229beacd864e8b4b147126dce"],["/assets/flags/1x1/zm.svg","ed461ffeaf1a705089141bcfc9b242c9"],["/assets/flags/1x1/zw.svg","5cf66e3e7d129daddc6d9c35bc310f7b"],["/assets/flags/4x3/ad.svg","80b56cac30f6f75702c1e34e5d81fe75"],["/assets/flags/4x3/ae.svg","c95d30a96b9f4ba7c239c952953b87b9"],["/assets/flags/4x3/af.svg","fb048910ad0d082e5e8343daca0167a8"],["/assets/flags/4x3/ag.svg","428c0ec7e1977e30b4009e9c02b171a1"],["/assets/flags/4x3/ai.svg","210e39c9e5653c7cb19bf25fc1cf49bd"],["/assets/flags/4x3/al.svg","34997bcd0c478eb1fdebba5be2347398"],["/assets/flags/4x3/am.svg","9c21f78a00ebc9b565c94ff1a524c880"],["/assets/flags/4x3/ao.svg","52f39b031f8b52f6505110cd421ba658"],["/assets/flags/4x3/aq.svg","10c5248184295ca86445fbaf15e57103"],["/assets/flags/4x3/ar.svg","6af75cd8b5957edd689d1b69469fc59c"],["/assets/flags/4x3/as.svg","2965e29d266ec30a32443b334e8b63f2"],["/assets/flags/4x3/at.svg","823ba626b73121aa2b3ef5ed7fe31c3c"],["/assets/flags/4x3/au.svg","5aad6b73525dd70ed14e63a041574b25"],["/assets/flags/4x3/aw.svg","dac08025bda75843ac6764f134897a71"],["/assets/flags/4x3/ax.svg","3ff869ab802948aacee55a9b3fe67eb3"],["/assets/flags/4x3/az.svg","b3e390e23f037f4bfef4cfaf75bc8017"],["/assets/flags/4x3/ba.svg","a7ef50b5c7f00a91e32c6acfb7bc99ad"],["/assets/flags/4x3/bb.svg","7f3b682080b43dafe864ce4832f3ed75"],["/assets/flags/4x3/bd.svg","9e842c5a9e0a84d297653cbfb9b44739"],["/assets/flags/4x3/be.svg","7a8139a5996a4b6ac3e98c04d017ef2c"],["/assets/flags/4x3/bf.svg","6c97025b70cee92e0d63bb3675348bda"],["/assets/flags/4x3/bg.svg","6b0f19ebe956e8174e7ae73e9447c030"],["/assets/flags/4x3/bh.svg","fec4d794565f408122751c956b4014de"],["/assets/flags/4x3/bi.svg","18088b6711e04e51c0d6dc7334b1d701"],["/assets/flags/4x3/bj.svg","1ce88e89b8c87c75e610ef1ff8fa175c"],["/assets/flags/4x3/bl.svg","91efed128c41426ad84593c66903721b"],["/assets/flags/4x3/bm.svg","413e55008618a1eb9b16cb7b421b1951"],["/assets/flags/4x3/bn.svg","d8d63b8e925aa74e28f3215e20b68e9a"],["/assets/flags/4x3/bo.svg","bda39d844f8c7d374db41ed745fb0b05"],["/assets/flags/4x3/bq.svg","d43a21e4510a25c2ae57ff5ac40d79fe"],["/assets/flags/4x3/br.svg","dbe042dcd436e933cd52c7b7e575c1ba"],["/assets/flags/4x3/bs.svg","fe2b7386b6f6ddcfe132c6e440f521cb"],["/assets/flags/4x3/bt.svg","243a682b34b4d1f3365398aa3c2b940f"],["/assets/flags/4x3/bv.svg","11b9ea0db08a932206d24111067c3e51"],["/assets/flags/4x3/bw.svg","d4fbc11053ff3d14fcc372c38d6ad861"],["/assets/flags/4x3/by.svg","9a3f1dbc5283fac4f11f13da019055c2"],["/assets/flags/4x3/bz.svg","30df4325ff01acf5ec742b190cd5dbbf"],["/assets/flags/4x3/ca.svg","761c3da8724e82ea8c4d5c93456c527c"],["/assets/flags/4x3/cc.svg","218093eef00aa9e80163a9a407b363e6"],["/assets/flags/4x3/cd.svg","893cec2eb17d2b0181100808b08e524d"],["/assets/flags/4x3/cf.svg","a1c731b7a9bf397298446868839a8aa5"],["/assets/flags/4x3/cg.svg","e06cffdb3f035845f0309179ea7fec50"],["/assets/flags/4x3/ch.svg","c3ab95d78cd796c5bfdd3d46525ec026"],["/assets/flags/4x3/ci.svg","a0fd542e75124e4595aada5c976f0287"],["/assets/flags/4x3/ck.svg","cbc1e5e7758246a61dcb1f2b5ea2867b"],["/assets/flags/4x3/cl.svg","23871b0b06273fa06ff5bb803400aff8"],["/assets/flags/4x3/cm.svg","4bbf0900ad17e3cfceea866879cd08f0"],["/assets/flags/4x3/cn.svg","cdff442e2eea87a0e306835ae961eeca"],["/assets/flags/4x3/co.svg","963bc8842a3fa252a3aed33e3db195f0"],["/assets/flags/4x3/cr.svg","2db1ea6fb7bf92cfb8b605f317b90af4"],["/assets/flags/4x3/cu.svg","1d1b8be2a0c741241fc08c59aba4a40a"],["/assets/flags/4x3/cv.svg","53e062c3a564a74d18939d89628f2557"],["/assets/flags/4x3/cw.svg","892d51aa51444bea587b5005bf7ec454"],["/assets/flags/4x3/cx.svg","3655df247b20d7c93b5f4c781d27a71d"],["/assets/flags/4x3/cy.svg","1850b2ec3ba19fa8af45468a4d6b40f5"],["/assets/flags/4x3/cz.svg","a72d6331d6380af18899aa7a9c672702"],["/assets/flags/4x3/de.svg","c4aec2f3498421f91d9f066ba8ed5626"],["/assets/flags/4x3/dj.svg","888283cbde643f9320a947212552ae08"],["/assets/flags/4x3/dk.svg","9d511a643b28f3b0830c036602c58f5f"],["/assets/flags/4x3/dm.svg","9803a97f4468f35527d343f9e8f04b48"],["/assets/flags/4x3/do.svg","c5488dc2a363d1d15e7a60287bc098c5"],["/assets/flags/4x3/dz.svg","3677149788636fe99bc9bff33f065270"],["/assets/flags/4x3/ec.svg","8887ec9321d25c1346a4ef2eee223666"],["/assets/flags/4x3/ee.svg","128d5146959c4498c77740d7d0188e28"],["/assets/flags/4x3/eg.svg","9cedd55d88f96c60b487816d8e16b6ad"],["/assets/flags/4x3/eh.svg","3bb73a266adbf68fe844bfa000b0740d"],["/assets/flags/4x3/er.svg","360cbba450bc6fd883bfde9d3798fffe"],["/assets/flags/4x3/es.svg","02f51bb2ff54ad5b5d998e97baa84285"],["/assets/flags/4x3/et.svg","9e9e9243a6a673dfcdc49b649c69d1b2"],["/assets/flags/4x3/eu.svg","d1728c59eea66dfa6eb0fc22b9e73380"],["/assets/flags/4x3/fi.svg","3308d09ba9acc4d691175c2ddce73ab9"],["/assets/flags/4x3/fj.svg","564d3372dbfa7cc9f8316d63d8e46623"],["/assets/flags/4x3/fk.svg","1d967bee8a355b086e8b937314416241"],["/assets/flags/4x3/fm.svg","acfb5f4d09dba239869e4e1a9db2f1d1"],["/assets/flags/4x3/fo.svg","16f9343db77a37c6edcf32050bad1d1f"],["/assets/flags/4x3/fr.svg","4163a98ec1a06b374da33ba7cb4efdcc"],["/assets/flags/4x3/ga.svg","93a82df0356ed32d3d423f19505d6074"],["/assets/flags/4x3/gb-eng.svg","c0484805d353883f8b119ab55371ed05"],["/assets/flags/4x3/gb-nir.svg","3815873eb00f52c688dbe210fb40dad2"],["/assets/flags/4x3/gb-sct.svg","240e69d5357ca5a933c37784ce76ab8c"],["/assets/flags/4x3/gb-wls.svg","25cf5fa496965254d3396bd9e5c09cad"],["/assets/flags/4x3/gb.svg","5aef6544adb270241539dad6b30b192d"],["/assets/flags/4x3/gd.svg","162ce461dfdf94e8100f193c29fe4b15"],["/assets/flags/4x3/ge.svg","874232ab896d10d76cf1089f2d7847e5"],["/assets/flags/4x3/gf.svg","9a5ce53864c792eb58b250c2ad3f1dae"],["/assets/flags/4x3/gg.svg","c62e14e0bb0a3f9dcba8e3dbf3d4485c"],["/assets/flags/4x3/gh.svg","5dcc2511f4c9eeb765245abcbdc170f4"],["/assets/flags/4x3/gi.svg","8ea0c32c3f6cbfe0d930662b69759541"],["/assets/flags/4x3/gl.svg","1b081e27f3d18d0fd49e77210a22069d"],["/assets/flags/4x3/gm.svg","c3845da23478653f3c5fe6a61833a72d"],["/assets/flags/4x3/gn.svg","65b273f647a2a6998af893c93dcda04e"],["/assets/flags/4x3/gp.svg","4163a98ec1a06b374da33ba7cb4efdcc"],["/assets/flags/4x3/gq.svg","92dfd46233dd9f0c966b8c9141c592aa"],["/assets/flags/4x3/gr.svg","c663e8a881b76bbf3db81f90a3d6a401"],["/assets/flags/4x3/gs.svg","241fcf9b22157c10c4678f1db4a60997"],["/assets/flags/4x3/gt.svg","6751d451ac79dbba27c768f21ce76b40"],["/assets/flags/4x3/gu.svg","c6d603d9774c3bda798c56c35f50e4fb"],["/assets/flags/4x3/gw.svg","9a6a1fd5012e7369c5c2d181c531b0f1"],["/assets/flags/4x3/gy.svg","0686bc016010cc4178579f174b56b32a"],["/assets/flags/4x3/hk.svg","473474b35c6b708d9bf45a2227a45bff"],["/assets/flags/4x3/hm.svg","5f905452bfc3ec59304b1f0244430f4b"],["/assets/flags/4x3/hn.svg","419269abdae9a25839de96e6880f7c66"],["/assets/flags/4x3/hr.svg","caa8fe901fafe7afc35ae6798c83cc8a"],["/assets/flags/4x3/ht.svg","f7f2661f6e3c07574275a031750b9182"],["/assets/flags/4x3/hu.svg","da153ccbb9b5de1eedfe092f2b8f7714"],["/assets/flags/4x3/id.svg","4cb8e3937adf6667a5a54aec7aebb6e8"],["/assets/flags/4x3/ie.svg","f964c67c6335de11b145b96e608960ee"],["/assets/flags/4x3/il.svg","96be27adb675c1cc56c3527ca7ad1c65"],["/assets/flags/4x3/im.svg","158c225c07095b207d8e6eea56a78ae9"],["/assets/flags/4x3/in.svg","c8eaed22d6408dca8b1a6283348493ba"],["/assets/flags/4x3/io.svg","1b80b02d926a96488aa071ddf215fa08"],["/assets/flags/4x3/iq.svg","37406c816cea74277364f41afaca73ea"],["/assets/flags/4x3/ir.svg","53fff51d79c93f80ad4a9cfc20d8ffb5"],["/assets/flags/4x3/is.svg","cc21a611a249a0fcbc23309aa7739fa6"],["/assets/flags/4x3/it.svg","55f474f9472dae770fae980fc52ae66a"],["/assets/flags/4x3/je.svg","4cf51fa3e131974c95b940315bff37fd"],["/assets/flags/4x3/jm.svg","e9d57c62cc1ea344e515a3de97a55e78"],["/assets/flags/4x3/jo.svg","410791537c484b1201d94189a32562e3"],["/assets/flags/4x3/jp.svg","0bd8608b1f942c0e1819d7c083cc7038"],["/assets/flags/4x3/ke.svg","72899a9f1c6eeb88f67ae32a44487361"],["/assets/flags/4x3/kg.svg","d3fec98595dfc99eb95f0d6345bad38e"],["/assets/flags/4x3/kh.svg","0c919c484680e89acbc71fadcfaf186e"],["/assets/flags/4x3/ki.svg","c95abbe8630c5db3a26218809fa49c96"],["/assets/flags/4x3/km.svg","84343e39d467fbce5c846c2046933268"],["/assets/flags/4x3/kn.svg","e58b7528988b7eb5332cb9036b4a8763"],["/assets/flags/4x3/kp.svg","f228ac0fc52fb4539b0e40e1216b5dc7"],["/assets/flags/4x3/kr.svg","6a49acccbbbb4226e2c202dee17b8b6d"],["/assets/flags/4x3/kw.svg","c39ff17277bf899547d9bc4f1c66a548"],["/assets/flags/4x3/ky.svg","83e08f6a5ce4624633e6b4cf3a9f3775"],["/assets/flags/4x3/kz.svg","e0170d107e85b589308480f2357bb052"],["/assets/flags/4x3/la.svg","e711740b4135b9a54e7e1644d14725af"],["/assets/flags/4x3/lb.svg","d4f04bd6c77881bbe4c9ef5db7349d90"],["/assets/flags/4x3/lc.svg","35c11edde02b63432f0d9bc0e47f99e4"],["/assets/flags/4x3/li.svg","aa269914cd8ea05e8af221c56b491fd9"],["/assets/flags/4x3/lk.svg","af500c556d8a173583d0372cb9e11c39"],["/assets/flags/4x3/lr.svg","5d2a73855050c87cc3ce455583782a5e"],["/assets/flags/4x3/ls.svg","0e7fd4867156e874102bba56530b6d45"],["/assets/flags/4x3/lt.svg","294b4dd1522564b94ca95f13d1852418"],["/assets/flags/4x3/lu.svg","57baebeb7196ab6c33a2a93dee41763c"],["/assets/flags/4x3/lv.svg","e42b7c2a136093d5d7c0e8307ff84ef5"],["/assets/flags/4x3/ly.svg","1a9eccecd2601f5c7ff3d4801f48800e"],["/assets/flags/4x3/ma.svg","15cbc4e25c6f4c66c5a8373d88143e86"],["/assets/flags/4x3/mc.svg","51d33f98216de39dd76727cf8207c9ba"],["/assets/flags/4x3/md.svg","a4600e0e492991db7bb0510cccec4407"],["/assets/flags/4x3/me.svg","7888feee15b3e21e07e7b1c96d0b6c5d"],["/assets/flags/4x3/mf.svg","4163a98ec1a06b374da33ba7cb4efdcc"],["/assets/flags/4x3/mg.svg","39e18dc78dd10f805973c3085fc0a9cb"],["/assets/flags/4x3/mh.svg","b91e36e3ee0386ffbeabdd103338cc18"],["/assets/flags/4x3/mk.svg","33038bf3b4c8b6c1d0e63bc1194fbd01"],["/assets/flags/4x3/ml.svg","cbac2021317a35fe393cc34f0da75a04"],["/assets/flags/4x3/mm.svg","0d30e46a2dfc5bbe273f3d88b3ba88f0"],["/assets/flags/4x3/mn.svg","ecc0d5684d1f0b8b5811cd791008b535"],["/assets/flags/4x3/mo.svg","1586276b9e073e470ae24705367809ab"],["/assets/flags/4x3/mp.svg","6120bc0e6b73f09edbee0ed845a48ed7"],["/assets/flags/4x3/mq.svg","bbad1b8158caa3380268c1614c82677c"],["/assets/flags/4x3/mr.svg","17e6c6294be4eecc3c6a96cf8ae14281"],["/assets/flags/4x3/ms.svg","724ce1c701600efdaa84140eed7293a1"],["/assets/flags/4x3/mt.svg","85d0375aa61bf605ea59358e096a7353"],["/assets/flags/4x3/mu.svg","9bada2df9c07d9e0765c7c7dba9c3b73"],["/assets/flags/4x3/mv.svg","74a3d181f19c28e8e0523133a8a0249f"],["/assets/flags/4x3/mw.svg","409bf5f1bcc0583a4011345294c196a8"],["/assets/flags/4x3/mx.svg","53aa83f3653c0d81024d2c419fc1527c"],["/assets/flags/4x3/my.svg","a3bac1482a197d928145d21a9f84da57"],["/assets/flags/4x3/mz.svg","b16a76ce4c1e1a37f71c5247ce11f8af"],["/assets/flags/4x3/na.svg","fdb29bb90d7e69b88f2840fe50cea4d7"],["/assets/flags/4x3/nc.svg","ea2c095aebea47eba7296d566094edde"],["/assets/flags/4x3/ne.svg","2d81cf808e0435e70cee4484b322cdfa"],["/assets/flags/4x3/nf.svg","548aa84dc4518851c3b7dd54c9691efc"],["/assets/flags/4x3/ng.svg","2cced269e7de8c853e2e40f7d6c6e37c"],["/assets/flags/4x3/ni.svg","3ca357762d2b0f1fa95d9c5eec57add0"],["/assets/flags/4x3/nl.svg","c60ddf8b74c96f59ae869080ddc3dbb2"],["/assets/flags/4x3/no.svg","c7ecfe59439b5fd23924fd206cf2fded"],["/assets/flags/4x3/np.svg","a240e39614724f8b42268d04634d3962"],["/assets/flags/4x3/nr.svg","6027ac4a28e1e5fba3d0cf1018424f74"],["/assets/flags/4x3/nu.svg","93a303e28f130834c6af34d0fd2ac8b5"],["/assets/flags/4x3/nz.svg","e122bd9946ca38eb05ff8a7213ea270c"],["/assets/flags/4x3/om.svg","b8aad635d65fcc2e6600e332b875cf37"],["/assets/flags/4x3/pa.svg","86076703eaa55f844b0583573a30b249"],["/assets/flags/4x3/pe.svg","77679feb277d6113788cfe51e8c14741"],["/assets/flags/4x3/pf.svg","1eadd7561ea00e5f613e5577b44e2c75"],["/assets/flags/4x3/pg.svg","281ca14174e36b8354f7b09e2499f504"],["/assets/flags/4x3/ph.svg","05cbc3e30d132a872dd28939d0034324"],["/assets/flags/4x3/pk.svg","7449d2f631a00860c2267e421cac2453"],["/assets/flags/4x3/pl.svg","8a30117f4b67d0c18105c25d86e75b6d"],["/assets/flags/4x3/pm.svg","ea2c095aebea47eba7296d566094edde"],["/assets/flags/4x3/pn.svg","0578011a2b9c2a7ac4e8a586fe9d604c"],["/assets/flags/4x3/pr.svg","0e00595cccf34ecf35757e750c2be1e3"],["/assets/flags/4x3/ps.svg","2cd732ba8deac460a00f71626213699c"],["/assets/flags/4x3/pt.svg","0e4672d22ec5d665ea3a3e1b3ccd0b45"],["/assets/flags/4x3/pw.svg","cd40122bcf5cac9ae4a0d482c78e3905"],["/assets/flags/4x3/py.svg","53bc79ea3e6728cb7a445678354e35db"],["/assets/flags/4x3/qa.svg","fa9b817cf4ca682420b2a5ae5d64f94d"],["/assets/flags/4x3/re.svg","ea2c095aebea47eba7296d566094edde"],["/assets/flags/4x3/ro.svg","23e5c37ad572dd0afbdfcd70e3b2e33b"],["/assets/flags/4x3/rs.svg","c4fb6d5fd649f459a789adca1c69d83f"],["/assets/flags/4x3/ru.svg","7a935957668f3f7e428f4ad90bc39116"],["/assets/flags/4x3/rw.svg","9026b430f37c684953cb97432c9381c7"],["/assets/flags/4x3/sa.svg","3294802cb8b76c7d3efb3116fc020eb2"],["/assets/flags/4x3/sb.svg","a49e3d66f040b5750cafbc153bf3d64e"],["/assets/flags/4x3/sc.svg","5a4c8667d65d4cd918d7dd19a8f45e92"],["/assets/flags/4x3/sd.svg","0debae66ba5f03a87f96f1d1485bf8cf"],["/assets/flags/4x3/se.svg","2518dbf2fa2e3cdb7b308f02c1bee718"],["/assets/flags/4x3/sg.svg","7dc1af865ad282eb5f0d5142577b9d15"],["/assets/flags/4x3/sh.svg","30a713e140081fb55fc5fe308ad21a62"],["/assets/flags/4x3/si.svg","373ea71ed6d655fd60182a9413cfb532"],["/assets/flags/4x3/sj.svg","c7ecfe59439b5fd23924fd206cf2fded"],["/assets/flags/4x3/sk.svg","17de4e65c66f76bb1f14f17c244b1213"],["/assets/flags/4x3/sl.svg","9c2f74fbca86dedcd3496af45e060692"],["/assets/flags/4x3/sm.svg","1492738e6604e26c0c67c033f2026e27"],["/assets/flags/4x3/sn.svg","4d5a3f2732aa74b4a166c9fac7e6f67a"],["/assets/flags/4x3/so.svg","f1d5f236fea716923dc1556ab74d3557"],["/assets/flags/4x3/sr.svg","264247fbaf1983431ab40d4a9981f927"],["/assets/flags/4x3/ss.svg","0f725390037c91212bc87a891db6451a"],["/assets/flags/4x3/st.svg","db24ac32673d8f82e4de67dbe3e63230"],["/assets/flags/4x3/sv.svg","b2522714cbf0e33661acc0fa483130c8"],["/assets/flags/4x3/sx.svg","606a355f900ddf30d62469e1972711ea"],["/assets/flags/4x3/sy.svg","ed3946561360de3fb9a1a6a8cd503f7c"],["/assets/flags/4x3/sz.svg","7a75af1c92c910acf5cc2a864971418b"],["/assets/flags/4x3/tc.svg","6c72859e1612bdfb6a2ca43322f3f42b"],["/assets/flags/4x3/td.svg","f69788e7dd5b34badabdfbbaed30bd16"],["/assets/flags/4x3/tf.svg","521b6574070f8df0e7763e9472769f89"],["/assets/flags/4x3/tg.svg","a87bd4aed7bc7616ec825e5e2b7d9b30"],["/assets/flags/4x3/th.svg","3468ffb4c3417f0810519f957766ae99"],["/assets/flags/4x3/tj.svg","cd4eb4e2c30537d6e0cf01b059f4074b"],["/assets/flags/4x3/tk.svg","4f5eddba5c38262cd5879b82b77da6cf"],["/assets/flags/4x3/tl.svg","e697cf790ee175ffb501618fdfe68a1f"],["/assets/flags/4x3/tm.svg","0167ce25e6713d90ca63743993c3fa06"],["/assets/flags/4x3/tn.svg","41472842c27a96af0ad1e8983aa1613c"],["/assets/flags/4x3/to.svg","ec3267f1bf6dbdb0bd15f46ce3d819fa"],["/assets/flags/4x3/tr.svg","66025830e6e30579c870039158c00acd"],["/assets/flags/4x3/tt.svg","7e382ff7898eb702e0d7d66e0faec8a5"],["/assets/flags/4x3/tv.svg","7e14f0b40b9a5432ce6988068a1a2f8b"],["/assets/flags/4x3/tw.svg","81d1a00e8c69ca1fbe491dfa836417a9"],["/assets/flags/4x3/tz.svg","7039704900973b1c5e5f4be0f4a0d3c6"],["/assets/flags/4x3/ua.svg","11f19612eb50ca7aef8fdf447942e524"],["/assets/flags/4x3/ug.svg","e0a300131f189fc30d21fb31283f083c"],["/assets/flags/4x3/um.svg","7191ea0b60883ccf7987f7ccc2bfb362"],["/assets/flags/4x3/un.svg","16fa9b2e5db5e7dca430ee11b30659f6"],["/assets/flags/4x3/us.svg","2b327bda75ccb4c9c3cd7ea61c4fed82"],["/assets/flags/4x3/uy.svg","1fb388e14b7fe2ef1f437d71326b33ab"],["/assets/flags/4x3/uz.svg","113dae2fff4fd8aa92336ed146de2dbb"],["/assets/flags/4x3/va.svg","cff25f26300be44275c37d11051ac0f9"],["/assets/flags/4x3/vc.svg","94ea9b12af9d773713a241cf6e4cb10b"],["/assets/flags/4x3/ve.svg","d43fc888213dc868a338bd4063d478ae"],["/assets/flags/4x3/vg.svg","f9f4a05e489772a6b9ab12e703d4660d"],["/assets/flags/4x3/vi.svg","435170ffd37b6ed435a9187029b2f00e"],["/assets/flags/4x3/vn.svg","6e977413a695e2a873e907dbdb09c4cc"],["/assets/flags/4x3/vu.svg","856fb0cc7615715dd246604ff2cff1aa"],["/assets/flags/4x3/wf.svg","9b983852ff9266b3fd8ddd809c73647d"],["/assets/flags/4x3/ws.svg","f5294ec2fb923d238f8ea415084a8738"],["/assets/flags/4x3/ye.svg","623d59376ac08e19e94312e064d14055"],["/assets/flags/4x3/yt.svg","ea2c095aebea47eba7296d566094edde"],["/assets/flags/4x3/za.svg","ef89544d6899b95617061f92247563ac"],["/assets/flags/4x3/zm.svg","15fc8cf0d05aa3e239e64f914d35863a"],["/assets/flags/4x3/zw.svg","1716da05460e711454bfe0ed21c4ecce"],["/assets/icons/android-icon-192x192.png","4a47270bad5a922689b0a7e2c99b7065"],["/assets/icons/apple-icon-114x114.png","7bf42cc68e17fc960c1666299251af11"],["/assets/icons/apple-icon-120x120.png","fa04beb307dd5f6fddbd8cf6cb4eed40"],["/assets/icons/apple-icon-144x144.png","5b8a328c762ad773f87de802a84ec22a"],["/assets/icons/apple-icon-152x152.png","9b1a69091792dab76af1a21a24f7bcbc"],["/assets/icons/apple-icon-180x180.png","d89e3e2c25a6ad6a8cac969c07d9453e"],["/assets/icons/apple-icon-57x57.png","5f98713efbe0d02aa012f853a28130f4"],["/assets/icons/apple-icon-60x60.png","d009d2a0333fcb0082d9a2d56b4110f8"],["/assets/icons/apple-icon-72x72.png","4ee69d8ecf066e6117367b560395d165"],["/assets/icons/apple-icon-76x76.png","e643813cfdf104f6973498558e46c6c8"],["/assets/icons/favicon-16x16.png","63b2b99795701cf803afe0a91dd0bdac"],["/assets/icons/favicon-32x32.png","3d6f429b80710b93e760f2a8ed2126fd"],["/assets/icons/favicon-96x96.png","9aead9c3860369addbe4150293ba4bb1"],["/assets/icons/manifest.json","e50e6a1c9ed6452635d3211f39501e0d"],["/assets/images/1002.jpg","cf01fee211c0300a94082665fdc75b9a"],["/assets/images/304.jpg","485397588fdb0cfae87c13a409d74b1c"],["/assets/images/306.jpg","2725d8072f66e9e2afb8516df7da6e54"],["/assets/images/307.jpg","04c71439bfeeab1adb8bcfc2cb9d8f64"],["/assets/images/319.jpg","6794da4de9be7b4903a1ca612373c904"],["/assets/images/771.jpg","a01a4a7249ed010b9a558d5c622fa82f"],["/assets/images/869.jpg","8e43d490d69800650e532e6fb7f84cce"],["/assets/images/870.jpg","8dd43b507a08649758219a474ba4d73a"],["/assets/images/871.jpg","da013ee17461c5f245967035fb2a2a8e"],["/assets/images/bg1.jpg","823c58065f546fdd89cfd312475ca364"],["/assets/images/empty-view-1.jpg","d9efa07a1c1c8746f67f9e019d717ca9"],["/assets/images/ingredientes/elegir-sucursal.html","5148baa7b4dcb14565790b4d36ad74d1"],["/assets/images/products/p1.png","a6f30628feb5b9212dfb0e358a5ac239"],["/assets/images/products/p10.png","aaff17d5cf0625a6a3ad4fc80f06640a"],["/assets/images/products/p2.png","ccd9af40affd1c7c5b4e585d438392fe"],["/assets/images/products/p3.png","c93c779e1b1051d477abba7ea592c08a"],["/assets/images/products/p4.png","5a0c793c6c36df9c0bc2d8a395bfb8f6"],["/assets/images/products/p5.png","d3ef05c65e20fa18f01ae41abe5e3587"],["/assets/images/products/p6.png","50f4780913a095e3dace1eef34ca4e29"],["/assets/images/products/p7.png","1c7e634381044d650570e3913631b970"],["/assets/images/products/p8.png","5a903cdb16061e6542c3335db5d984a6"],["/assets/images/sign-in-3.jpg","0cd445ea1285537b06abd2ae02c1266a"],["/assets/json/100.json","7485a1250dded7184824b1e7896b3fcb"],["/assets/json/datatables.json","53fc3dae1f3a0d0e6b1856acd15e2737"],["/favicon.ico","6faa05c620184b47a1c7ab5d743ae7ed"],["/fonts/Simple-Line-Icons.eot","f33df365d6d0255b586f2920355e94d7"],["/fonts/Simple-Line-Icons.svg","73a932562a1e314703469d0a352fcda9"],["/fonts/Simple-Line-Icons.ttf","d2285965fe34b05465047401b8595dd0"],["/fonts/Simple-Line-Icons.woff","78f07e2c2a535c26ef21d95e41bd7175"],["/fonts/Simple-Line-Icons.woff2","0cb0b9c589c0624c9c78dd3d83e946f6"],["/fonts/material-icons.woff2","cdf5969b7a910edf90bbf822a3cbc797"],["/index.html","e375deb8604aab135bc1d0fe20567baa"],["/inline.2d10b77fe0934a3f90dc.bundle.js","f4eeac91a35bae87c0bfa0c947ce5f50"],["/main.736ce3f8797885fd41b4.bundle.js","20efd4d717e520109361f62a5186bbd8"],["/manifest.json","54e19fe614101b446c07c9800225fd02"],["/polyfills.15bd8ff5e2c48dee6f8a.bundle.js","9c3b325ade45150b775c20f8568f0ff1"],["/scripts.74f69b308d56f74aa89e.bundle.js","64b5a9412837297d1d578564e7c628cb"],["/styles.1cfbf8101f602de584f9.bundle.css","1cfbf8101f602de584f9cd4d5a5d2516"],["/vendor.08b36b9980a4305d5488.bundle.js","dbe15e4f29e00424b39853326def1303"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["^(?!\\/__)"], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







