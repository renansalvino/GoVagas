import React, { InputHTMLAttributes } from 'react';
import './style.css';
interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
    name: any;
}

const Select: React.FC<SelectProps> = ({ name, ...rest }) => {
    return (
        <div>
            <label htmlFor="hab">Habilidades:</label>
            <select className="default" name="hab" >
                <option selected>Escolher...</option>
                <option>ABAP</option>
                <option>ABNF</option>
                <option>Ada</option>
                <option>Administrador de sistema</option>
                <option>AdonisJS</option>
                <option>ADVPL</option>
                <option>ADVPL ASP</option>
                <option>Agavi</option>
                <option>Agda</option>
                <option>AgilePHP</option>
                <option>AGS Script</option>
                <option>Ajax</option>
                <option>Akelos</option>
                <option>Alloy</option>
                <option>Alpine Abuild</option>
                <option>AMPL</option>
                <option>Android</option>
                <option>Angular</option>
                <option>Ant Build System</option>
                <option>ANTLR</option>
                <option>Apache</option>
                <option>Apex</option>
                <option>API</option>
                <option>APL</option>
                <option>Apollo Guidance Computer</option>
                <option>AppleScript</option>
                <option>Arc</option>
                <option>Arduino</option>
                <option>ARKit</option>
                <option>AsciiDoc</option>
                <option>ASN.1</option>
                <option>ASP</option>
                <option>AspectJ</option>
                <option>ASP.NET Core</option>
                <option>ASP.NET MVC</option>
                <option>Assembly</option>
                <option>Atomik</option>
                <option>ATS</option>
                <option>Augeas</option>
                <option>Aura</option>
                <option>Aurelia</option>
                <option>AutoHotkey</option>
                <option>AutoIt</option>
                <option>Awk</option>
                <option>AWS EC2 (Elastic Compute Cloud)</option>
                <option>AWS RDS (Relational Database Service)</option>
                <option>AWS S3</option>
                <option>Backbone.js</option>
                <option>Backendless</option>
                <option>Bash</option>
                <option>Batchfile</option>
                <option>Beego</option>
                <option>Befunge</option>
                <option>Big Data</option>
                <option>Bison</option>
                <option>BitBake</option>
                <option>Blade</option>
                <option>BlitzBasic</option>
                <option>BlitzMax</option>
                <option>Bluespec</option>
                <option>Boo</option>
                <option>Bootstrap</option>
                <option>Bottle</option>
                <option>Brainfuck</option>
                <option>Brightscript</option>
                <option>Bro</option>
                <option>Brutos</option>
                <option>C</option>
                <option>C#</option>
                <option>C++</option>
                <option>C2hs Haskell</option>
                <option>Cairngorm</option>
                <option>CakePHP</option>
                <option>Camping</option>
                <option>Cap&#39;n Proto</option>
                <option>Cappuccino</option>
                <option>CartoCSS</option>
                <option>Catalyst</option>
                <option>Ceylon</option>
                <option>CGI::Application</option>
                <option>CGI::Prototype</option>
                <option>Chapel</option>
                <option>Charity</option>
                <option>CherryPy</option>
                <option>ChucK</option>
                <option>Circumflex</option>
                <option>Cirru</option>
                <option>Clarion</option>
                <option>Clean</option>
                <option>ClearPress</option>
                <option>Click</option>
                <option>CLIPS</option>
                <option>Clojure</option>
                <option>Cloud</option>
                <option>CMake</option>
                <option>C-ObjDump</option>
                <option>COBOL</option>
                <option>Cocoon</option>
                <option>CodeIgniter</option>
                <option>CoffeeScript</option>
                <option>ColdFusion</option>
                <option>ColdFusion CFC</option>
                <option>COLLADA</option>
                <option>Common Lisp</option>
                <option>Compojure</option>
                <option>Component Pascal</option>
                <option>CompoundJS</option>
                <option>Conjure</option>
                <option>Cool</option>
                <option>Coq</option>
                <option>Cordova</option>
                <option>Cpp-ObjDump</option>
                <option>Creole</option>
                <option>Crystal</option>
                <option>CSON</option>
                <option>Csound</option>
                <option>Csound Document</option>
                <option>Csound Score</option>
                <option>CSS</option>
                <option>CSV</option>
                <option>Cuba</option>
                <option>Cucumber</option>
                <option>Cuda</option>
                <option>Cutelyst</option>
                <option>Cyclone3</option>
                <option>Cycript</option>
                <option>Cython</option>
                <option>D</option>
                <option>Darcs Patch</option>
                <option>Dart</option>
                <option>Data science</option>
                <option>Delphi</option>
                <option>Demandware</option>
                <option>Design Pattern</option>
                <option>desktop</option>
                <option>Devops</option>
                <option>Diff</option>
                <option>DIGITAL Command Language</option>
                <option>Django</option>
                <option>DM</option>
                <option>DNS Zone</option>
                <option>D-ObjDump</option>
                <option>Docker</option>
                <option>Dockerfile</option>
                <option>Doctrine</option>
                <option>Dogescript</option>
                <option>Dojo</option>
                <option>Dropwizard</option>
                <option>Drupal</option>
                <option>DTrace</option>
                <option>Durandal</option>
                <option>Dylan</option>
                <option>E</option>
                <option>Eagle</option>
                <option>EBNF</option>
                <option>eC</option>
                <option>Ecere Projects</option>
                <option>echo</option>
                <option>ECL</option>
                <option>ECLiPSe</option>
                <option>edn</option>
                <option>Eiffel</option>
                <option>EJB</option>
                <option>EJS</option>
                <option>Elasticsearch</option>
                <option>Eliom</option>
                <option>Elixir</option>
                <option>Elm</option>
                <option>Emacs Lisp</option>
                <option>Ember.js</option>
                <option>EmberScript</option>
                <option>Entity framework</option>
                <option>EQ</option>
                <option>Erlang</option>
                <option>Erlang Web</option>
                <option>ErlyWeb</option>
                <option>ERP</option>
                <option>ES6</option>
                <option>Excel</option>
                <option>Express</option>
                <option>F#</option>
                <option>Factor</option>
                <option>Fancy</option>
                <option>Fantom</option>
                <option>Feathers</option>
                <option>Filebench WML</option>
                <option>Filterscript</option>
                <option>Firebase</option>
                <option>fish</option>
                <option>Flask</option>
                <option>Flatiron</option>
                <option>Flex</option>
                <option>Flight</option>
                <option>Flutter</option>
                <option>FLUX</option>
                <option>Formatted</option>
                <option>Forth</option>
                <option>FORTRAN</option>
                <option>FreeMarker</option>
                <option>Frege</option>
                <option>FuelPHP</option>
                <option>Game Maker Language</option>
                <option>GAMS</option>
                <option>Gantry</option>
                <option>GAP</option>
                <option>GAS</option>
                <option>GCC Machine Description</option>
                <option>G-code</option>
                <option>GDB</option>
                <option>GDScript</option>
                <option>Genshi</option>
                <option>Gentoo Ebuild</option>
                <option>Gentoo Eclass</option>
                <option>Gettext Catalog</option>
                <option>Gin</option>
                <option>Git</option>
                <option>GLSL</option>
                <option>Glyph</option>
                <option>GN</option>
                <option>Gnuplot</option>
                <option>Go</option>
                <option>Golo</option>
                <option>Google Analytics</option>
                <option>Google Cloud</option>
                <option>Google Web Toolkit</option>
                <option>Gosu</option>
                <option>Grace</option>
                <option>Gradle</option>
                <option>Grails</option>
                <option>Grain</option>
                <option>Grammatical Framework</option>
                <option>Graph Modeling Language</option>
                <option>GraphQL</option>
                <option>Graphviz (DOT)</option>
                <option>Groff</option>
                <option>Grok</option>
                <option>Groovy</option>
                <option>Groovy Server Pages</option>
                <option>Gulp</option>
                <option>GWT </option>
                <option>Hack</option>
                <option>Halcyon</option>
                <option>Haml</option>
                <option>Hanami</option>
                <option>Handlebars</option>
                <option>Happstack</option>
                <option>Harbour</option>
                <option>Haskell</option>
                <option>Haxe</option>
                <option>HCL</option>
                <option>Hemlock</option>
                <option>Hibernate</option>
                <option>HLSL</option>
                <option>Horde</option>
                <option>HTML</option>
                <option>HTTP</option>
                <option>Hy</option>
                <option>HybridJava</option>
                <option>Hybris</option>
                <option>HydraMVC</option>
                <option>HyPhy</option>
                <option>IDL</option>
                <option>Idris</option>
                <option>IGOR Pro</option>
                <option>Inform 7</option>
                <option>INI</option>
                <option>Inno Setup</option>
                <option>Io</option>
                <option>Ioke</option>
                <option>Ionic</option>
                <option>iOS</option>
                <option>IRC log</option>
                <option>Ireport</option>
                <option>Isabelle</option>
                <option>Isabelle ROOT</option>
                <option>J</option>
                <option>Jade</option>
                <option>Jasmin</option>
                <option>Jasper</option>
                <option>Java</option>
                <option>JavaEE</option>
                <option>JavaScript</option>
                <option>JavaScriptMVC</option>
                <option>Java Server Pages</option>
                <option>Jenkins </option>
                <option>JFlex</option>
                <option>Jifty</option>
                <option>jQuery</option>
                <option>JSF</option>
                <option>JSON</option>
                <option>JSX</option>
                <option>Julia</option>
                <option>Jupyter Notebook</option>
                <option>Kanban</option>
                <option>KiCad</option>
                <option>Kit</option>
                <option>Koa</option>
                <option>Kohana</option>
                <option>Konstrukt</option>
                <option>Kotlin</option>
                <option>KRL</option>
                <option>kubernetes</option>
                <option>KumbiaPHP</option>
                <option>LabVIEW</option>
                <option>Laravel</option>
                <option>Lasso</option>
                <option>Latte</option>
                <option>Lean</option>
                <option>Lemmachine</option>
                <option>Less</option>
                <option>Lex</option>
                <option>LFE</option>
                <option>Lift</option>
                <option>LilyPond</option>
                <option>Limbo</option>
                <option>Linker Script</option>
                <option>Linux</option>
                <option>Linux Kernel Module</option>
                <option>Liquid</option>
                <option>LiquidLava</option>
                <option>Literate Agda</option>
                <option>Literate CoffeeScript</option>
                <option>Literate Haskell</option>
                <option>Lithium</option>
                <option>LiveScript</option>
                <option>LLVM</option>
                <option>Logos</option>
                <option>Logtalk</option>
                <option>LOLCODE</option>
                <option>LookML</option>
                <option>LoomScript</option>
                <option>LSL</option>
                <option>Lua</option>
                <option>LUMEN</option>
                <option>M</option>
                <option>M4</option>
                <option>M4Sugar</option>
                <option>Machine learning</option>
                <option>Mack</option>
                <option>Magento</option>
                <option>Makefile</option>
                <option>Mako</option>
                <option>Markdown</option>
                <option>Martini</option>
                <option>Mask</option>
                <option>Mason</option>
                <option>Mate</option>
                <option>Mathematica</option>
                <option>Matlab</option>
                <option>Maven POM</option>
                <option>Maveric</option>
                <option>Max</option>
                <option>MAXScript</option>
                <option>MediaWiki</option>
                <option>Merb</option>
                <option>Mercury</option>
                <option>Metal</option>
                <option>Meteor</option>
                <option>MFlow</option>
                <option>miku</option>
                <option>MiniD</option>
                <option>Mirah</option>
                <option>Mithril</option>
                <option>Modelica</option>
                <option>Modula-2</option>
                <option>Module Management System</option>
                <option>Mojolicious</option>
                <option>MongoDB</option>
                <option>Monkey</option>
                <option>Moocode</option>
                <option>MoonScript</option>
                <option>Moustache</option>
                <option>MQL4</option>
                <option>MQL5</option>
                <option>MTML</option>
                <option>MUF</option>
                <option>mupad</option>
                <option>Myghty</option>
                <option>MySQL</option>
                <option>Nancy</option>
                <option>NCL</option>
                <option>Nemerle</option>
                <option>Nerve</option>
                <option>nesC</option>
                <option>.NET</option>
                <option>NetLinx</option>
                <option>NetLinx+ERB</option>
                <option>NetLogo</option>
                <option>NewLisp</option>
                <option>Nginx</option>
                <option>Nimrod</option>
                <option>Ninja</option>
                <option>Nit</option>
                <option>Nitro</option>
                <option>Nix</option>
                <option>NL</option>
                <option>Node.js</option>
                <option>Nodemachine</option>
                <option>Node-router</option>
                <option>Noir</option>
                <option>NoSQL</option>
                <option>NPM</option>
                <option>NSIS</option>
                <option>Nu</option>
                <option>NumPy</option>
                <option>ObjDump</option>
                <option>Objective-C</option>
                <option>Objective-C++</option>
                <option>Objective-J</option>
                <option>OCaml</option>
                <option>Odoo</option>
                <option>Omgrofl</option>
                <option>Ooc</option>
                <option>Opa</option>
                <option>Opal</option>
                <option>OpenCL</option>
                <option>OpenEdge ABL</option>
                <option>OpenRC runscript</option>
                <option>OpenSCAD</option>
                <option>OpenType Feature File</option>
                <option>OpenUI5</option>
                <option>ORACLE</option>
                <option>Orbit</option>
                <option>Org</option>
                <option>Ox</option>
                <option>Oxygene</option>
                <option>Oz</option>
                <option>Pan</option>
                <option>Papyrus</option>
                <option>Parrot</option>
                <option>Parrot Assembly</option>
                <option>Parrot Internal Representation</option>
                <option>Pascal</option>
                <option>PAWN</option>
                <option>PeopleCode</option>
                <option>Perfect</option>
                <option>Perl</option>
                <option>Perl6</option>
                <option>Phalcon</option>
                <option>Phoenix</option>
                <option>PhoneGap</option>
                <option>Photoshop</option>
                <option>PHP</option>
                <option>Pic</option>
                <option>Picard</option>
                <option>Pickle</option>
                <option>PicoLisp</option>
                <option>PigLatin</option>
                <option>Pike</option>
                <option>Play</option>
                <option>PLpgSQL</option>
                <option>PLSQL</option>
                <option>Pod</option>
                <option>PogoScript</option>
                <option>Polymer</option>
                <option>Pony</option>
                <option>POO</option>
                <option>PostgreSQL</option>
                <option>PostScript</option>
                <option>POV-Ray SDL</option>
                <option>PowerBuilder</option>
                <option>PowerShell</option>
                <option>Prado</option>
                <option>Processing</option>
                <option>Progress</option>
                <option>Prolog</option>
                <option>Propeller Spin</option>
                <option>Protocol Buffer</option>
                <option>Public Key</option>
                <option>Puppet</option>
                <option>PureBasic</option>
                <option>Pure Data</option>
                <option>PureMVC</option>
                <option>PureScript</option>
                <option>Pyramid</option>
                <option>Python</option>
                <option>QA - Quality Assurance</option>
                <option>Qcodo</option>
                <option>QCubed</option>
                <option>Qlikview</option>
                <option>QMake</option>
                <option>QML</option>
                <option>Quixote</option>
                <option>R</option>
                <option>Racket</option>
                <option>Ragel in Ruby Host</option>
                <option>Ramaze</option>
                <option>RAML</option>
                <option>Rascal</option>
                <option>Ratpack</option>
                <option>Raw token data</option>
                <option>RDoc</option>
                <option>ReactJS</option>
                <option>React Native</option>
                <option>REALbasic</option>
                <option>Rebol</option>
                <option>Red</option>
                <option>Redcode</option>
                <option>Redis</option>
                <option>Redux</option>
                <option>RenderScript</option>
                <option>Ren&#39;Py</option>
                <option>RESTful</option>
                <option>RestfulX</option>
                <option>Restlet</option>
                <option>reStructuredText</option>
                <option>Revel</option>
                <option>REXX</option>
                <option>RHTML</option>
                <option>Ring</option>
                <option>Riot.js</option>
                <option>RMarkdown</option>
                <option>RobotFramework</option>
                <option>Roma</option>
                <option>Rouge</option>
                <option>RPM Spec</option>
                <option>Ruby on Rails</option>
                <option>Rum</option>
                <option>RUNOFF</option>
                <option>Rust</option>
                <option>Sage</option>
                <option>Sails.js</option>
                <option>Salesforce</option>
                <option>SaltStack</option>
                <option>Salvia</option>
                <option>SAP</option>
                <option>SAS</option>
                <option>Sass</option>
                <option>Scala</option>
                <option>Scalatra</option>
                <option>Scaml</option>
                <option>Scheme</option>
                <option>Scilab</option>
                <option>SCORM</option>
                <option>SCRUM</option>
                <option>SCSS</option>
                <option>Seagull</option>
                <option>seaside</option>
                <option>Selenium</option>
                <option>Self</option>
                <option>servant</option>
                <option>Server</option>
                <option>Sharepoint</option>
                <option>Shell</option>
                <option>Shell Script</option>
                <option>ShellSession</option>
                <option>Shen</option>
                <option>SilverStripe Sapphire</option>
                <option>simplex</option>
                <option>Sin</option>
                <option>Sinatra</option>
                <option>Slash</option>
                <option>Slim</option>
                <option>Smali</option>
                <option>Smalltalk</option>
                <option>Smarty</option>
                <option>SMT</option>
                <option>Snap</option>
                <option>Solar</option>
                <option>SourcePawn</option>
                <option>SPARQL</option>
                <option>Spline Font Database</option>
                <option>Spring</option>
                <option>SproutCore</option>
                <option>SQF</option>
                <option>SQL</option>
                <option>SQLPL</option>
                <option>SQL Server</option>
                <option>SQR</option>
                <option>Squatting</option>
                <option>Squirrel</option>
                <option>SRecode Template</option>
                <option>Stan</option>
                <option>Standard ML</option>
                <option>Stata</option>
                <option>STON</option>
                <option>Stripes</option>
                <option>Struts</option>
                <option>Styled-Components</option>
                <option>Stylus</option>
                <option>Sublime Text Config</option>
                <option>SubRip Text</option>
                <option>SuperCollider</option>
                <option>SVG</option>
                <option>sweetscala</option>
                <option>Swift</option>
                <option>Swiftlet</option>
                <option>Swiz</option>
                <option>Symfony</option>
                <option>SystemVerilog</option>
                <option>Tapestry</option>
                <option>Tcl</option>
                <option>Tcsh</option>
                <option>Tea</option>
                <option>Terra</option>
                <option>Testes automatizados</option>
                <option>Testes unitários</option>
                <option>TeX</option>
                <option>Text</option>
                <option>Textile</option>
                <option>Thrift</option>
                <option>Tipfy</option>
                <option>TI Program</option>
                <option>TLA</option>
                <option>Tomcat</option>
                <option>TOML</option>
                <option>Tornado</option>
                <option>Turbine</option>
                <option>TurboGears</option>
                <option>Turing</option>
                <option>Turtle</option>
                <option>Twig</option>
                <option>TXL</option>
                <option>TypeScript</option>
                <option>UKI</option>
                <option>UML</option>
                <option>Unified Parallel C</option>
                <option>Unity</option>
                <option>Unity3D Asset</option>
                <option>Uno</option>
                <option>UnrealScript</option>
                <option>UrWeb</option>
                <option>Vaadin</option>
                <option>Vala</option>
                <option>Vanilla</option>
                <option>Vapor</option>
                <option>VBA</option>
                <option>VCL</option>
                <option>Verilog</option>
                <option>Vert.x</option>
                <option>VHDL</option>
                <option>VimL</option>
                <option>Visual Basic</option>
                <option>Volt</option>
                <option>Vork</option>
                <option>Vroom</option>
                <option>Vue</option>
                <option>Vue.js</option>
                <option>Wavefront Material</option>
                <option>Wavefront Object</option>
                <option>Waves</option>
                <option>web2py</option>
                <option>Web API</option>
                <option>WebGUI</option>
                <option>WebIDL</option>
                <option>Webjure</option>
                <option>Web Ontology Language</option>
                <option>Web Services</option>
                <option>Wee</option>
                <option>Wicket</option>
                <option>wisp</option>
                <option>WordPress</option>
                <option>World of Warcraft Addon Data</option>
                <option>WPF</option>
                <option>X10</option>
                <option>Xamarin</option>
                <option>xBase</option>
                <option>XC</option>
                <option>Xitrum</option>
                <option>XML</option>
                <option>XMPP</option>
                <option>Xojo</option>
                <option>XPages</option>
                <option>XProc</option>
                <option>XQuery</option>
                <option>XS</option>
                <option>XSLT</option>
                <option>Xtend</option>
                <option>Xyster</option>
                <option>Yacc</option>
                <option>YAML</option>
                <option>YANG</option>
                <option>Yesod</option>
                <option>Yii</option>
                <option>Zend</option>
                <option>Zephir</option>
                <option>Zimpl</option>
                <option>ZK</option>
                <option>Zope</option>
                <option>Zotonic</option>
            </select>
        </div>
    )
}
export default Select;