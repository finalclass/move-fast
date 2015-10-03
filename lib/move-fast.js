'use babel';

import {CompositeDisposable} from 'atom';
import * as fs from 'fs';

class MoveFast {

    subscriptions;

    activate() {
        this.subscriptions = new CompositeDisposable();

        this.subscriptions.add(atom.commands.add('atom-text-editor', {
            'move-fast:up': this.moveUp,
            'move-fast:down': this.moveDown
        }));
    }

    deactivate() {
      this.subscriptions.dispose();
    }

    moveUp() {
        var editor = atom.workspace.getActiveTextEditor();
        if (!editor) {return;}
        editor.cursors.forEach((cursor) => cursor.moveUp(5));
    }

    moveDown() {
        var editor = atom.workspace.getActiveTextEditor();
        if (!editor) {return;}
        editor.cursors.forEach((cursor) => cursor.moveDown(5));
    }
}

export default new MoveFast();
