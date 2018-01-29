/**
 * Reselect cria seletores memorizados para 
 * evitar recalculos de estado desnecessario.
 */

import { createSelector } from 'reselect';

// SELETORES DE ENTRADA
// criados como funções de seletores não memorizados
// pois não transformam os dados q eles selecionam
const getVisibilityFilter = (state) => state.visibilityFilter;
const getTodos = (state) => state.todos;

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getTodos], // seletores de entrada

    // Função de transformação que calcula lista de todos
    (visibilityFilter, todos) => {
        switch (visibilityFilter) {
            case 'SHOW_ALL':
                return todos
            case 'SHOW_COMPLETED':
                return todos.filter(t => t.completed)
            case 'SHOW_ACTIVE':
                return todos.filter(t => !t.completed)
        }
    }
);