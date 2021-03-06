import {spyOnAddEventListener} from '../common.js';

describe('TMDB Configuration Tests', function () {
    before(function () {
        cy.visit('/configuration', {onBeforeLoad: spyOnAddEventListener});
    });
    it('Test invalid TMDB Key', () => {
        cy.get('#movieDbApiKey')
            .clear()
            .type('ABC123')
            .should('have.value', 'ABC123');

        cy.get('#testTmdbKey')
            .click();

        cy.get('#tmdbTestError')
            .should('be.visible');

        cy.get('#tmdbTestSuccess')
            .should('not.be.visible');

        cy.get('#tmdbSaveError')
            .should('not.be.visible');

        cy.get('#tmdbSaveSuccess')
            .should('not.be.visible');
    });

    it('Test valid TMDB Key', () => {
        cy.get('#movieDbApiKey')
            .clear()
            .type('723b4c763114904392ca441909aa0375')
            .should('have.value', '723b4c763114904392ca441909aa0375');

        cy.get('#testTmdbKey')
            .click();

        cy.get('#tmdbTestError')
            .should('not.be.visible');

        cy.get('#tmdbTestSuccess')
            .should('be.visible');

        cy.get('#tmdbSaveError')
            .should('not.be.visible');

        cy.get('#tmdbSaveSuccess')
            .should('not.be.visible');
    });

    it('Save invalid TMDB Key', () => {
        cy.get('#movieDbApiKey')
            .clear()
            .type('ABC123')
            .should('have.value', 'ABC123');

        cy.get('#saveTmdbKey')
            .click();

        cy.get('#tmdbTestError')
            .should('not.be.visible');

        cy.get('#tmdbTestSuccess')
            .should('not.be.visible');

        cy.get('#tmdbSaveError')
            .should('not.be.visible');

        cy.get('#tmdbSaveSuccess')
            .should('be.visible');

        cy.visit('/configuration', {onBeforeLoad: spyOnAddEventListener});

        cy.get('#movieDbApiKey')
            .should('have.value', 'ABC123');
    });

    it('Save valid TMDB Key', () => {
        cy.get('#movieDbApiKey')
            .clear()
            .type('723b4c763114904392ca441909aa0375')
            .should('have.value', '723b4c763114904392ca441909aa0375');

        cy.get('#saveTmdbKey')
            .click();

        cy.get('#tmdbTestError')
            .should('not.be.visible');

        cy.get('#tmdbTestSuccess')
            .should('not.be.visible');

        cy.get('#tmdbSaveError')
            .should('not.be.visible');

        cy.get('#tmdbSaveSuccess')
            .should('be.visible');

        cy.visit('/configuration', {onBeforeLoad: spyOnAddEventListener});

        cy.get('#movieDbApiKey')
            .should('have.value', '723b4c763114904392ca441909aa0375');
    });

    it('Attempt to save empty TMDB Key', () => {
        cy.get('#movieDbApiKey')
            .clear()
            .should('have.value', '');

        cy.get('#saveTmdbKey')
            .click();

        cy.get('#emptyTmdbKeyLabel')
            .should('be.visible');

        cy.get('#tmdbTestError')
            .should('not.be.visible');

        cy.get('#tmdbTestSuccess')
            .should('not.be.visible');

        cy.get('#tmdbSaveError')
            .should('not.be.visible');

        cy.get('#tmdbSaveSuccess')
            .should('not.be.visible');
    });

    it('Attempt to test empty TMDB Key', () => {
        cy.get('#movieDbApiKey')
            .clear()
            .should('have.value', '');

        cy.get('#testTmdbKey')
            .click();

        cy.get('#emptyTmdbKeyLabel')
            .should('be.visible');

        cy.get('#tmdbTestError')
            .should('not.be.visible');

        cy.get('#tmdbTestSuccess')
            .should('not.be.visible');

        cy.get('#tmdbSaveError')
            .should('not.be.visible');

        cy.get('#tmdbSaveSuccess')
            .should('not.be.visible');
    });
});

