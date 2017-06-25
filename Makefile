HUGO        := $(shell which hugo)
NODEMODULES := ./node_modules
NODEBIN     := $(NODEMODULES)/.bin
NODESASS    := $(NODEBIN)/node-sass
WEBPACK     := $(NODEBIN)/webpack
BOOTSTRAP   := $(NODEMODULES)/bootstrap-sass/assets/stylesheets
FONTAWESOME := $(NODEMODULES)/font-awesome

ASSETSDIR := ./assets
STATICDIR := ./static
PUBLICDIR := ./public

JSDIR    := $(ASSETSDIR)/js
JSIN     := $(shell find $(JSDIR) -name '*.js')
JSOUTDIR := $(STATICDIR)/js
JSOUT    := $(JSOUTDIR)/vendor.js

CSSDIR    := $(ASSETSDIR)/sass
CSSIN     := $(shell find $(CSSDIR) -name '*.scss')
CSSOUTDIR := $(STATICDIR)/css
CSSOUT    := $(CSSOUTDIR)/main.css

FONTNAME   := fontawesome-webfont
FONTEXTS   := eot svg ttf woff woff2
FONTDIR    := $(FONTAWESOME)/fonts
FONTIN     := $(patsubst %, $(FONTDIR)/$(FONTNAME).%, $(FONTEXTS)) \
              $(FONTDIR)/FontAwesome.otf
FONTOUTDIR := $(STATICDIR)/fonts
FONTOUT    := $(patsubst %, $(FONTOUTDIR)/$(FONTNAME).%, $(FONTEXTS)) \
              $(FONTOUTDIR)/FontAwesome.otf

SASSARGS := --output-style nested --include-path $(BOOTSTRAP) \
            --include-path $(FONTAWESOME)/scss --source-map true \
            --source-map-contents -o $(CSSOUTDIR) $(CSSDIR)

all: $(JSOUT) $(CSSOUT) $(FONTOUT) build

clean:
	rm -rf $(JSOUTDIR) $(CSSOUTDIR) $(FONTOUTDIR) $(PUBLICDIR)

build:
	$(HUGO)

serve:
	$(HUGO) server --renderToDisk --bind 0.0.0.0

prod: clean
	@ NODE_ENV=production $(MAKE) all

watch: $(FONTOUT)
	@ $(MAKE) watchjs & $(MAKE) watchcss & $(MAKE) serve

watchjs:
	$(WEBPACK) -w

watchcss: $(CSSOUT)
	$(NODESASS) -w $(SASSARGS)

$(JSOUTDIR):
	mkdir -p $(JSOUTDIR)

$(JSOUT): $(JSIN) $(JSOUTDIR)
	$(WEBPACK)

$(CSSOUTDIR):
	mkdir -p $(CSSOUTDIR)

$(CSSOUT): $(CSSIN) $(CSSOUTDIR)
	$(NODESASS) $(SASSARGS)

$(FONTOUTDIR):
	mkdir -p $(FONTOUTDIR)

$(FONTOUT): $(FONTOUTDIR) $(FONTIN)
	cp $(FONTIN) $(FONTOUTDIR)

.PHONY: all clean build serve prod watch watchjs watchcss
