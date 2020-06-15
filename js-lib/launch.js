import State from './state';
import View from './view';
import Controller from './controller';
import { TouchController, DesktopController } from './input-controller';

/**
 * Runs the application.
 */
(function() {
    var state = new State();
    var view = new View(state);
    var controller = new Controller(view, state);
    var touchController = new TouchController(controller);
    var desktopController = new DesktopController(controller);
    view.animate();
})();
