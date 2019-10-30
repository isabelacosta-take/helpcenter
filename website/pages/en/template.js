const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');


//BLiP Icon for SVGs
const defs = '/img/defs.svg';
class BlipIcon extends React.Component {
    render() {
        const className = 'blip-icon' + (this.props.className ? (' ' + this.props.className) : '')
        return (<svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={className}
            width="1em" height="1em"
        >
            <use xlinkHref={`${defs}#${this.props.name}`} />
        </svg>
        );
    }
}


class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>

                {/* Topo */}
                <div>
                    <div className="pages-top-details">
                        <div className="main-details">
                            <div className="categories-details"></div>
                            <p className="title-details"> </p>
                            <p className="creator-template"> </p>
                            <p className="subtitle-details"> </p>
                            <div className="buttons-details">
                                <a id="download" href="#"
                                    download="blipTest" target="blank"><button className="button-details-download">
                                        <div className="button-content-download">
                                            <BlipIcon name="download" className="icon-button-download"></BlipIcon>
                                            <p className="text-button-download">Download</p>
                                        </div>
                                    </button></a>

                                <button className="button-details-see">
                                    <div className="button-content-see">
                                        <BlipIcon name="open-eye" className="icon-button-see"></BlipIcon>
                                        <p className="text-button-see">Visualizar</p>
                                    </div>
                                </button>

                            </div>

                        </div>

                        <div className="slideshow-container">
                            <div className="carousel">

                            </div>

                            <div className="dots">

                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal bot */}
                <div id="modalBot" class="modalBot">
                    <div class="modal-content-bot">
                        <span class="closeBot">&times;</span>
                        <iframe className="iframe-bot" src="#"></iframe>
                    </div>
                </div>


                {/* Conteudo */}
                <div className="page-content-details">

                    <div className="tabs-area">
                        <div className="tab">
                            <button id="TabDetails" className="tablinks-active">Detalhes</button>
                            <button id="TabInstall" className="tablinks">Instalação</button>
                            <button id="TabSupport" className="tablinks">Suporte</button>
                        </div>


                        <div id="Details" className="tabcontent">
                        
                        </div>

                        <div id="Install" className="tabcontent">

                        </div>

                        <div id="Support" className="tabcontent">

                        </div>
                    </div>

                    <div className="func-table">
                        <p className="content-title">Funcionalidades</p>
                        <table className="table-func">
                            <tbody>

                            </tbody>
                        </table>
                    </div>

                </div>
               
                <ScriptDynamically></ScriptDynamically>
                <ScriptCarousel></ScriptCarousel>
                <ScriptTabs></ScriptTabs>
                <ScriptModalBot></ScriptModalBot>

            </div>
        );
    }
}

class ScriptCarousel extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    var init = true;
                    var slideIndex = 1;
                    var dots = document.getElementsByClassName("dot");
                    
                    showSlides(slideIndex);

                    for (var j = 0; j < dots.length; j++){
                       dots[j].addEventListener('click',
                            function(){
                                showSlides(parseInt(this.id));
                            }, false);
                    }
       
                    function showSlides(n) {
                        var i;
                        var slides = document.getElementsByClassName("mySlides");
                        slideIndex = n;
                                            
                        for (i = 0; i < slides.length; i++) {
                            slides[i].getElementsByTagName('img')[0].className = "img-disabled";
                            
                        }
                            
                        for (i = 0; i < dots.length; i++) {
                            dots[i].className = dots[i].className.replace(" active", "");
                        }
                        if (init == true){
                            slides[slideIndex-1].getElementsByTagName('img')[0].className = "img-inactive";
                            slides[slideIndex].getElementsByTagName('img')[0].className = "img-active";
                            slides[slideIndex+1].getElementsByTagName('img')[0].className = "img-inactive";
                            dots[slideIndex].className += " active";
                            init = false;
                            
                        }
                        else if (init != true){
                            dots[slideIndex].className += " active";
                            slides[slideIndex].getElementsByTagName('img')[0].className = "img-active";
                           
                            if (slides[slideIndex-1]){
                                slides[slideIndex-1].getElementsByTagName('img')[0].className = "img-inactive";
                            }
                            if (slides[slideIndex+1]){
                                slides[slideIndex+1].getElementsByTagName('img')[0].className = "img-inactive";
                            }
                           
                        }
                    }                 

                `
                }}
            />
        );
    }
}

class ScriptTabs extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    var tabDetails = document.getElementById("TabDetails");
                    tabDetails.disabled = true;
                    document.getElementById("Details").style.display = "block";
                    var tabInstall = document.getElementById("TabInstall");
                    var tabSupport = document.getElementById("TabSupport");

                    tabDetails.onclick = function() {
                        var i, tabcontent, tablinks;
                        tabcontent = document.getElementsByClassName("tabcontent");
                        for (i = 0; i < tabcontent.length; i++) {
                            tabcontent[i].style.display = "none";
                        }

                        tablinks = document.getElementsByClassName("tablinks");
                        for (i = 0; i < tablinks.length; i++) {
                            tablinks[i].className = tablinks[i].className.replace(" active", "");
                        }

                        document.getElementById("Details").style.display = "block";
                        tabDetails.className += "-active";
                        tabDetails.disabled = true;
                        tabInstall.disabled = false;
                        tabInstall.className = "tablinks";
                        tabSupport.disabled = false;
                        tabSupport.className = "tablinks";
                    }

                    tabInstall.onclick = function() {
                        var i, tabcontent, tablinks;
                        tabcontent = document.getElementsByClassName("tabcontent");
                        for (i = 0; i < tabcontent.length; i++) {
                            tabcontent[i].style.display = "none";
                        }

                        tablinks = document.getElementsByClassName("tablinks");
                        for (i = 0; i < tablinks.length; i++) {
                            tablinks[i].className = tablinks[i].className.replace(" active", "");
                        }

                        document.getElementById("Install").style.display = "block";
                        tabInstall.className += "-active";
                        tabInstall.disabled = true;
                        tabDetails.disabled = false;
                        tabDetails.className = "tablinks";
                        tabSupport.disabled = false;
                        tabSupport.className = "tablinks";
                    }

                    tabSupport.onclick = function() {
                        var i, tabcontent, tablinks;
                        tabcontent = document.getElementsByClassName("tabcontent");
                        for (i = 0; i < tabcontent.length; i++) {
                            tabcontent[i].style.display = "none";
                        }

                        tablinks = document.getElementsByClassName("tablinks");
                        for (i = 0; i < tablinks.length; i++) {
                            tablinks[i].className = tablinks[i].className.replace(" active", "");
                        }

                        document.getElementById("Support").style.display = "block";
                        tabSupport.className += "-active";
                        tabSupport.disabled = true;
                        tabDetails.disabled = false;
                        tabDetails.className = "tablinks";
                        tabInstall.disabled = false;
                        tabInstall.className = "tablinks";
                    }

                `
                }}
            />
        );
    }
}

class ScriptModalBot extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    var modalBot = document.getElementById("modalBot");
                    var btn = document.getElementsByClassName('button-details-see')[0];
                    var span = document.getElementsByClassName('closeBot')[0];
                    btn.onclick = function(){
                        modalBot.style.display = "block";
                    }

                    span.onclick = function() { 
                        modalBot.style.display = "none";
                    }

                    window.onclick = function(event) {
                        if (event.target == modalBot) {
                            modalBot.style.display = "none";
                        }
                    }

                `
                }}
            />
        );
    }
}

class ScriptDynamically extends React.Component {
    render() {
        return (
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    const urlParams = new URLSearchParams(window.location.search);
                    const myParam = urlParams.get('Id');
                    console.log(myParam);

                    var data = {
                    "templates": [
                        {
                        "id": "1",
                        "title": "Título do Template 1",
                        "creator": "Criado por BLiP",
                        "subtitle": "Genialidade é fruto de muito hardwork. Você tá realmente obcecado pelos seus sonhos? Construa algo que seja top. Viva em busca da masterização e do profissionalismo, every f*ing day. O inconformismo é o combustível da alta performance. A vida acontece de você e não pra você. Walk the f*ing talk.",
                        "categories": [
                            {
                            "category": "Petshop"
                            },
                            {
                            "subcategory": "Categporia"
                            },
                            {
                            "subcategory": "Categporia"
                            },
                            {
                            "subcategory": "Categporia"
                            },
                            {
                            "subcategory": "Categporia"
                            },
                            {
                            "subcategory": "Categporia"
                            }
                        ],
                        "download_uri": "/img/illustrations/carousel-1.svg",
                        "link_bot": "https://chat.blip.ai/?appKey=ZGVtb2JvdDQ6NzQxYjc5YzktMmNjYS00ZGRjLThlODQtZWIwYmRlODkyNmU3",
                        "images": [
                            {
                            "url": "/img/illustrations/carousel-1.svg"
                            },
                            {
                            "url": "/img/illustrations/carousel-2.svg"
                            },
                            {
                            "url": "/img/illustrations/carousel-3.svg"
                            },
                            {
                            "url": "/img/illustrations/carousel-1.svg"
                            },
                            {
                            "url": "/img/illustrations/carousel-1.svg"
                            },
                            {
                            "url": "/img/illustrations/carousel-3.svg"
                            }
                        ],
                        "tabs": {
                            "details": '<p class="content-title">Compatível com:</p> \\
                            <div class="compatible-channels"> \\
                                <img class="compatible-channels-img" src="/img/illustrations/whatsapp-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/workplace-logo.svg"></img> \\
                                <img class="compatible-channels-img" src="/img/illustrations/blipchat-logo.svg"></img> \\
                            </div> \\
                            <p class="content-text">Chatbot Agency is designed for chatbot agency to support your customers to build chatbots successfully. \\
                                This chatbot provides chatbot features, benefits, use cases to help your customers design a chatbot and apply chatbots to \\
                            boost sales to a higher level.</p> \\
                            <ul> \\
                                <li class="content-list-text">Collect the customer inquiries</li> \\
                                <li class="content-list-text">Work 24/7/365 and deliver leads into your inbox each day</li> \\
                                <li class="content-list-text">Provide chatbot information and use cases</li> \\
                                <li class="content-list-text">Help the customers build chatbot successfully</li> \\
                                <li class="content-list-text">Improve your business branding & engagement</li> \\
                            </ul> \\
                            <p class="content-text">Viva em busca da masterização e do profissionalismo, every f*ing day. \\
                                É você quem decide se o seu dia vai ser incrível ou não.  Você nunca vai estar pronto então comece agora. \\
                                Quebre padrões e atinja a alta performance em todas as áreas da sua vida. Pra chegar ao next level você precisa de \\
                                comprometimento e muito hardwork. Você tá realmente obcecado pelos seus sonhos?  Você tá realmente obcecado \\
                            pelos seus sonhos? Never f*ing give up. Você nunca vai estar pronto então comece agora.</p>',  


                            "install": '<p class="content-title">Como instalar?</p> \\
                            <p class="content-text"> Do mesmo modo, a valorização de fatores subjetivos nos obriga à análise das condições epistemológicas e cognitivas \\
                                exigidas. Por outro lado, o desafiador cenário globalizado cumpre um papel essencial na formulação das considerações \\
                                acima? Nada se pode dizer, pois sobre o que não se pode falar, deve-se calar. Assim mesmo, a estrutura atual da ideação \\
                                semântica exige a precisão e a definição dos prospectos condicionalizantes e necessários a todo juízo empírico. \\
                                Antes de mais nada, a inter-independência da objetivação e subjetivação auxilia a preparação e a composição das \\
                                posturas dos filósofos divergentes com relação às atribuições conceituais. Se a própria desterritorialização relativa \\
                                se projeta sobre a indeterminação contínua de distintas formas de fenômeno unificou os a priori sensíveis e \\
                                intelectuais numa determinação recíproca das novas teorias propostas.</p> \\
                                \\
                            <p class="content-text">Finalmente, por trás dessa questão do sujeito e da realidade a consolidação das estruturas psico-lógicas assume importantes posições no \\
                                estabelecimento da natureza não-filosófica dos conceitos. Acima de tudo, o conceito de diáthesis e os princípios fundamentais de rhytmos e \\
                                arrythmiston permite um conhecimento geral de todo ser, sensível ou não sensível, da determinação do Ser enquanto Ser. Como Deleuze \\
                                eloquentemente mostrou, o início da atividade geral de formação de conceitos é condição necessária dos paradigmas filosóficos. \\
                                Um teórico da redundância negaria que a teoria de Fliess obstaculiza a apreciação da importância dos relacionamentos verticais \\
                                entre as hierarquias conceituais. Neste momento o leitor deve reconhecer que acabei de demolir as bases da metafísica de Heidegger, \\
                                pois o Übermensch de Nietzsche, ou seja, o Super-Homem, nos arrasta ao labirinto de sofismas obscuros do processo de comunicação \\
                                como um todo.</p> \\
                                \\
                            <p class="content-text">No entanto, não podemos esquecer que o fenômeno da Internet obstaculiza a admissão de uma ontologia das ciências discursivas. \\
                                Poderia ser sugerido, entretanto, que a hegemonia do ambiente político resultou no abandono das relações entre o conteúdo proposicional \\
                                e o figurado. Segundo Heidegger, o plano de imanência pré-filosófico ainda não demonstrou convincentemente como vai participar na \\
                                mudança das múltiplas direções do ponto de transcendência do sentido enunciativo.</p>',

                            "support": '<p class="content-title">Suporte</p> \\
                            <p class="content-text"> Do mesmo modo, a valorização de fatores subjetivos nos obriga à análise das condições epistemológicas e cognitivas \\
                                exigidas. Por outro lado, o desafiador cenário globalizado cumpre um papel essencial na formulação das considerações \\
                                acima? Nada se pode dizer, pois sobre o que não se pode falar, deve-se calar. Assim mesmo, a estrutura atual da ideação \\
                                semântica exige a precisão e a definição dos prospectos condicionalizantes e necessários a todo juízo empírico. \\
                                Antes de mais nada, a inter-independência da objetivação e subjetivação auxilia a preparação e a composição das \\
                                posturas dos filósofos divergentes com relação às atribuições conceituais. Se a própria desterritorialização relativa \\
                                se projeta sobre a indeterminação contínua de distintas formas de fenômeno unificou os a priori sensíveis e \\
                                intelectuais numa determinação recíproca das novas teorias propostas.</p> \\
                                \\
                            <p class="content-text">Finalmente, por trás dessa questão do sujeito e da realidade a consolidação das estruturas psico-lógicas assume importantes posições no \\
                                estabelecimento da natureza não-filosófica dos conceitos. Acima de tudo, o conceito de diáthesis e os princípios fundamentais de rhytmos e \\
                                arrythmiston permite um conhecimento geral de todo ser, sensível ou não sensível, da determinação do Ser enquanto Ser. Como Deleuze \\
                                eloquentemente mostrou, o início da atividade geral de formação de conceitos é condição necessária dos paradigmas filosóficos. \\
                                Um teórico da redundância negaria que a teoria de Fliess obstaculiza a apreciação da importância dos relacionamentos verticais \\
                                entre as hierarquias conceituais. Neste momento o leitor deve reconhecer que acabei de demolir as bases da metafísica de Heidegger, \\
                                pois o Übermensch de Nietzsche, ou seja, o Super-Homem, nos arrasta ao labirinto de sofismas obscuros do processo de comunicação \\
                                como um todo.</p> \\
                                \\
                            <p class="content-text">No entanto, não podemos esquecer que o fenômeno da Internet obstaculiza a admissão de uma ontologia das ciências discursivas. \\
                                Poderia ser sugerido, entretanto, que a hegemonia do ambiente político resultou no abandono das relações entre o conteúdo proposicional \\
                                e o figurado. Segundo Heidegger, o plano de imanência pré-filosófico ainda não demonstrou convincentemente como vai participar na \\
                                mudança das múltiplas direções do ponto de transcendência do sentido enunciativo.</p>',
                        },
                        "table": [
                            {
                            "func": "✓ Funcionalidade 1"
                            },
                            {
                            "func": "✓ Funcionalidade 2"
                            },
                            {
                            "func": "✓ Funcionalidade 3"
                            },
                            {
                            "func": "✓ Funcionalidade 4"
                            },
                            {
                            "func": "✓ Funcionalidade 5"
                            },
                            {
                            "func": "✓ Funcionalidade 6"
                            },
                            {
                            "func": "✓ Funcionalidade 7"
                            },
                            {
                            "func": "✓ Funcionalidade 8"
                            },
                            {
                            "func": "✓ Funcionalidade 9"
                            },
                            {
                            "func": "✓ Funcionalidade 10"
                            }
                        ]
                        }
                    ]
                    };
                    var template = data.templates[myParam-1];
                    if (template){
                        var categories_details = document.getElementsByClassName('categories-details')[0];
                        
                        template.categories.forEach(function (category, index) {
                                if (Object.keys(category).toString() == "category"){
                                var element = document.createElement("button");
                                element.setAttribute("class", "category-details");
                                element.innerHTML = Object.values(category).toString();
                                categories_details.appendChild(element);
                                }else{
                                var element = document.createElement("button");
                                element.setAttribute("class", "subcategory-details");
                                element.innerHTML = Object.values(category).toString();
                                categories_details.appendChild(element);
                                }
                            });
                        
                        var title_details = document.getElementsByClassName('title-details')[0];
                        title_details.innerHTML = template.title.toString();

                        var creator = document.getElementsByClassName('creator-template')[0];
                        creator.innerHTML = template.creator.toString();

                        var subtitle = document.getElementsByClassName('subtitle-details')[0];
                        subtitle.innerHTML = template.subtitle.toString();

                        var download = document.getElementById('download');
                        download.href = template.download_uri.toString();

                        var linkBot = document.getElementsByClassName('iframe-bot')[0];
                        linkBot.src = template.link_bot.toString();

                        var carousel = document.getElementsByClassName("carousel")[0];
                        var dots = document.getElementsByClassName("dots")[0];
                        template.images.forEach(function(image, index) {
                            var div = document.createElement("div");
                            div.setAttribute("class", "mySlides fade");
                                
                                var img = document.createElement("img");
                                img.src = image.url.toString();
                            div.appendChild(img);
                            carousel.appendChild(div);

                            var dot = document.createElement("span");
                            dot.setAttribute("class", "dot");
                            dot.setAttribute("id", index);
                            dots.appendChild(dot);

                        });

                        var table = document.getElementsByTagName('table')[0];
                        table.setAttribute("class", "table-func");
                        template.table.forEach(function(row, index){
                            var tr = document.createElement("tr");
                            tr.setAttribute("class", "tr-details");
                                var td = document.createElement("td");
                                td.setAttribute("class", "td-details");
                                    var content = document.createElement("div");
                                    content.setAttribute("class", "td-details-content");
                                        var text = document.createTextNode(row.func.toString());
                                    content.appendChild(text);
                                td.appendChild(content);
                            tr.appendChild(td);
                        table.appendChild(tr);
                        });


                        var details = document.getElementById("Details");
                        details.innerHTML = template.tabs.details;
                            var a = document.createElement("a");
                            a.setAttribute("class", "docs-prev button");
                            Object.assign(a.style, {"margin-top": "87px", "text-align": "center", "height": "38px" ,"width": "30%", "border-radius": "8px"});
                            a.href = "/templates";
                                var span = document.createElement("span");
                                span.setAttribute("class", "function-name-prevnext");
                                span.innerHTML = "< Ver todos os templates";
                                span.style.fontWeight = "bold";
                            a.appendChild(span);
                        details.appendChild(a);


                        var install = document.getElementById("Install");
                        install.innerHTML = template.tabs.install;

                        var support = document.getElementById("Support");
                        support.innerHTML = template.tabs.support;
                    }
                    else{
                        alert("404: PÁGINA NÃO ENCONTRADA!"); 
                        window.location.href = "/templates";
                    }
                    

                    
                `
                }}
            />
        );
    }
}

Detail.title = 'Template';
module.exports = Detail; 