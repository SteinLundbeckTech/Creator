/*
    @date               : 10.04.2026
    @author             : Stein Lundbeck
    @description        : Command history with undo support. Provides a global CreatorCommandHistory
                          object that tracks executed commands and allows undoing the last one.
    @latest             : 10.04.2026
*/

const CreatorCommandHistory = (() => {
    const _maxHistorySize = 100;
    const _history = [];
    let _keyboardShortcutEnabled = true;

    const execute = (command) => {
        command.execute();
        _history.push(command);
        if (_history.length > _maxHistorySize) {
            _history.shift();
        }
    };

    const undo = () => {
        if (_history.length > 0) {
            const command = _history.pop();
            command.undo();
        }
    };

    const canUndo = () => _history.length > 0;

    const clear = () => _history.splice(0, _history.length);

    const setKeyboardShortcut = (enabled) => {
        _keyboardShortcutEnabled = enabled;
    };

    document.addEventListener("keydown", (e) => {
        if (_keyboardShortcutEnabled && (e.ctrlKey || e.metaKey) && e.key === "z") {
            e.preventDefault();
            undo();
        }
    });

    return { execute, undo, canUndo, clear, setKeyboardShortcut };
})();

	//# sourceMappingUrl=Element.UndoCommand.js.map
