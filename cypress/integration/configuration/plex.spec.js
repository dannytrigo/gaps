import {spyOnAddEventListener} from '../common.js';

describe('Plex Configuration Tests', function () {
    before(function () {
        cy.visit('/configuration', {onBeforeLoad: spyOnAddEventListener});

        cy.get('#plexTab')
            .click();

        //Remove existing server before each test
        cy.get("body").then($body => {
            if ($body.find("[onclick=\"removePlexServer(this.getAttribute('data-machineIdentifier'))\"]").length > 0) {
                cy.get("[onclick=\"removePlexServer(this.getAttribute('data-machineIdentifier'))\"]")
                    .each(($el) => {
                        cy.wrap($el).click();
                    });
            }
        });
    });

    it('Test invalid new Plex Server', () => {
        cy.get('#address')
            .clear()
            .type('111.222.121.212')
            .should('have.value', '111.222.121.212');

        cy.get('#port')
            .clear()
            .type('11212')
            .should('have.value', '11212');

        cy.get('#plexToken')
            .clear()
            .type('123qwe')
            .should('have.value', '123qwe');

        cy.get('#testPlexServer')
            .click();

        cy.get('#plexSpinner')
            .should('not.be.visible');

        cy.get('#plexTestError')
            .should('be.visible');

        cy.get('#plexTestSuccess')
            .should('not.be.visible');

        cy.get('#plexSaveError')
            .should('not.be.visible');

        cy.get('#plexSaveSuccess')
            .should('not.be.visible');

        cy.get('#plexDeleteError')
            .should('not.be.visible');

        cy.get('#plexDeleteSuccess')
            .should('not.be.visible');

        cy.get('#plexDuplicateError')
            .should('not.be.visible');
    });

    it('Test valid new Plex Server', () => {
        cy.get('#address')
            .clear()
            .type(atob('MTkyLjE2OC4xLjk='))
            .should('have.value', atob('MTkyLjE2OC4xLjk='));

        cy.get('#port')
            .clear()
            .type(atob('MzI0MDA='))
            .should('have.value', atob('MzI0MDA='));

        cy.get('#plexToken')
            .clear()
            .type(atob('bVF3NHVhd3hUeVlFbXFOVXJ2Qno='))
            .should('have.value', atob('bVF3NHVhd3hUeVlFbXFOVXJ2Qno='));

        cy.get('#testPlexServer')
            .click();

        cy.get('#plexSpinner')
            .should('not.be.visible');

        cy.get('#plexTestError')
            .should('not.be.visible');

        cy.get('#plexTestSuccess')
            .should('be.visible');

        cy.get('#plexSaveError')
            .should('not.be.visible');

        cy.get('#plexSaveSuccess')
            .should('not.be.visible');

        cy.get('#plexDeleteError')
            .should('not.be.visible');

        cy.get('#plexDeleteSuccess')
            .should('not.be.visible');

        cy.get('#plexDuplicateError')
            .should('not.be.visible');
    });


    it('Save invalid Plex Server', () => {
        cy.get('#address')
            .clear()
            .type('111.222.121.212')
            .should('have.value', '111.222.121.212');

        cy.get('#port')
            .clear()
            .type('11212')
            .should('have.value', '11212');

        cy.get('#plexToken')
            .clear()
            .type('123qwe')
            .should('have.value', '123qwe');

        cy.get('#addPlexServer')
            .click();

        //Wait for timeout from plex
        cy.wait(5000);

        cy.get('#plexSpinner')
            .should('not.be.visible');

        cy.get('#plexTestError')
            .should('not.be.visible');

        cy.get('#plexTestSuccess')
            .should('not.be.visible');

        cy.get('#plexSaveError')
            .should('be.visible');

        cy.get('#plexSaveSuccess')
            .should('not.be.visible');

        cy.get('#plexDeleteError')
            .should('not.be.visible');

        cy.get('#plexDeleteSuccess')
            .should('not.be.visible');

        cy.get('#plexDuplicateError')
            .should('not.be.visible');
    });

    it('Save valid Plex Server', () => {
        cy.get('#address')
            .clear()
            .type(atob('MTkyLjE2OC4xLjk='))
            .should('have.value', atob('MTkyLjE2OC4xLjk='));

        cy.get('#port')
            .clear()
            .type(atob('MzI0MDA='))
            .should('have.value', atob('MzI0MDA='));

        cy.get('#plexToken')
            .clear()
            .type(atob('bVF3NHVhd3hUeVlFbXFOVXJ2Qno='))
            .should('have.value', atob('bVF3NHVhd3hUeVlFbXFOVXJ2Qno='));

        cy.get('#addPlexServer')
            .click();

        cy.get('#plexSpinner')
            .should('not.be.visible');

        cy.get('#plexTestError')
            .should('not.be.visible');

        cy.get('#plexTestSuccess')
            .should('not.be.visible');

        cy.get('#plexSaveError')
            .should('not.be.visible');

        cy.get('#plexSaveSuccess')
            .should('be.visible');

        cy.get('#plexDeleteError')
            .should('not.be.visible');

        cy.get('#plexDeleteSuccess')
            .should('not.be.visible');

        cy.get('#plexDuplicateError')
            .should('not.be.visible');

        //Define card here
        cy.get('.card-header')
            .should('have.text', 'Red');

        cy.get('.list-group > :nth-child(1)')
            .should('have.text', 'Best Movies');

        cy.get('.list-group > :nth-child(2)')
            .should('have.text', 'Movies with new Metadata');

        cy.get('.list-group > :nth-child(3)')
            .should('have.text', 'Saw');
    });

    it('Test valid existing Plex Server', () => {
        cy.get('#testExisting')
            .click();

        cy.get('#plexSpinner')
            .should('not.be.visible');

        cy.get('#plexTestError')
            .should('not.be.visible');

        cy.get('#plexTestSuccess')
            .should('be.visible');

        cy.get('#plexSaveError')
            .should('not.be.visible');

        cy.get('#plexSaveSuccess')
            .should('not.be.visible');

        cy.get('#plexDeleteError')
            .should('not.be.visible');

        cy.get('#plexDeleteSuccess')
            .should('not.be.visible');

        cy.get('#plexDuplicateError')
            .should('not.be.visible');
    });

    it('Remove valid existing Plex Server', () => {
        cy.get('#removeExisting')
            .click();

        cy.get('#plexSpinner')
            .should('not.be.visible');

        cy.get('#plexTestError')
            .should('not.be.visible');

        cy.get('#plexTestSuccess')
            .should('not.be.visible');

        cy.get('#plexSaveError')
            .should('not.be.visible');

        cy.get('#plexSaveSuccess')
            .should('not.be.visible');

        cy.get('#plexDeleteError')
            .should('not.be.visible');

        cy.get('#plexDeleteSuccess')
            .should('be.visible');

        cy.get('#plexDuplicateError')
            .should('not.be.visible');
    });

    it('Save duplicate valid Plex Server', () => {
        cy.get('#address')
            .clear()
            .type(atob('MTkyLjE2OC4xLjk='))
            .should('have.value', atob('MTkyLjE2OC4xLjk='));

        cy.get('#port')
            .clear()
            .type(atob('MzI0MDA='))
            .should('have.value', atob('MzI0MDA='));

        cy.get('#plexToken')
            .clear()
            .type(atob('bVF3NHVhd3hUeVlFbXFOVXJ2Qno='))
            .should('have.value', atob('bVF3NHVhd3hUeVlFbXFOVXJ2Qno='));

        cy.get('#addPlexServer')
            .click();

        cy.get('#plexSpinner')
            .should('not.be.visible');

        cy.get('#plexTestError')
            .should('not.be.visible');

        cy.get('#plexTestSuccess')
            .should('not.be.visible');

        cy.get('#plexSaveError')
            .should('not.be.visible');

        cy.get('#plexSaveSuccess')
            .should('be.visible');

        cy.get('#plexDeleteError')
            .should('not.be.visible');

        cy.get('#plexDeleteSuccess')
            .should('not.be.visible');

        cy.get('#plexDuplicateError')
            .should('not.be.visible');

        //Define card here
        cy.get('.card-header')
            .should('have.text', 'Red');

        cy.get('.list-group > :nth-child(1)')
            .should('have.text', 'Best Movies');

        cy.get('.list-group > :nth-child(2)')
            .should('have.text', 'Movies with new Metadata');

        cy.get('.list-group > :nth-child(3)')
            .should('have.text', 'Saw');

        cy.get('#address')
            .clear()
            .type('192.168.1.9')
            .should('have.value', '192.168.1.9');

        cy.get('#port')
            .clear()
            .type(atob('MzI0MDA='))
            .should('have.value', atob('MzI0MDA='));

        cy.get('#plexToken')
            .clear()
            .type(atob('bVF3NHVhd3hUeVlFbXFOVXJ2Qno='))
            .should('have.value', atob('bVF3NHVhd3hUeVlFbXFOVXJ2Qno='));

        cy.get('#addPlexServer')
            .click();

        cy.get('#plexSpinner')
            .should('not.be.visible');

        cy.get('#plexTestError')
            .should('not.be.visible');

        cy.get('#plexTestSuccess')
            .should('not.be.visible');

        cy.get('#plexSaveError')
            .should('not.be.visible');

        cy.get('#plexSaveSuccess')
            .should('not.be.visible');

        cy.get('#plexDeleteError')
            .should('not.be.visible');

        cy.get('#plexDeleteSuccess')
            .should('not.be.visible');

        cy.get('#plexDuplicateError')
            .should('be.visible');

    });
});