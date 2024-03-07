import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SandboxCardViewModel } from './shared/sandbox-card.model';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    public _output = '';
    public formGroup: FormGroup = new FormGroup({});

    public card: SandboxCardViewModel = null;
    public cardList: SandboxCardViewModel[] = [];

    constructor() {
        this.formGroup.addControl('fxLayout', new FormControl('flex-row', []));
        this.formGroup.addControl('fxLayoutWrap', new FormControl('', []));
        this.formGroup.addControl('fxLayoutAlignHorizontal', new FormControl('justify-content-center', []));
        this.formGroup.addControl('fxLayoutAlignVertical', new FormControl('align-items-center', []));
        this.formGroup.addControl('fxLayoutGap', new FormControl('2', []));

        this.formGroup.valueChanges
            .subscribe(() => { this.generateOutput(); });
        this.generateOutput();
    }

    public ngOnInit() {
        for (let i = 0; i < 5; i++)
            this.addBox();
    }

    public fxLayoutChange() {
        for (let item of this.cardList)
            this.calcCardSizes(item);
    }
    public fxLayoutAlignVerticalChange() {
        for (let item of this.cardList)
            this.calcCardSizes(item);
    }


    private fxLayoutValue() {
        return this.formGroup.get('fxLayout')?.value;
    }
    private fxLayoutWrapValue() {
        return this.formGroup.get('fxLayoutWrap')?.value;
    }
    private fxLayoutAlignHorizontalValue() {
        return this.formGroup.get('fxLayoutAlignHorizontal')?.value;
    }
    private fxLayoutAlignVerticalValue() {
        return this.formGroup.get('fxLayoutAlignVertical')?.value;
    }
    private fxLayoutGapValue() {
        return (this.formGroup.get('fxLayoutGap')?.value != '0' ? 'flex-gap-' + this.formGroup.get('fxLayoutGap')?.value : '');
    }
    private generateOutput() {
        this._output = 'd-flex';
        if (!!this.fxLayoutValue()) this._output += ' ' + this.fxLayoutValue();
        if (!!this.fxLayoutWrapValue()) this._output += ' ' + this.fxLayoutWrapValue();
        if (!!this.fxLayoutAlignHorizontalValue()) this._output += ' ' + this.fxLayoutAlignHorizontalValue();
        if (!!this.fxLayoutAlignVerticalValue()) this._output += ' ' + this.fxLayoutAlignVerticalValue();
        if (!!this.fxLayoutGapValue()) this._output += ' ' + this.fxLayoutGapValue();
    }

    private latestSize = 0;
    public addBox() {
        let min = 2;
        let max = 6;
        let tmp = new SandboxCardViewModel();
        tmp.index = this.cardList.length;
        do { tmp.size = 3 * Math.floor(Math.random() * (max - min) + min); }
        while (tmp.size == this.latestSize);
        this.latestSize = tmp.size;
        this.calcCardSizes(tmp);
        this.cardList.push(tmp);
    }
    public removeBox() { this.cardList.pop(); }

    public onSelectCard($event: number) {
        console.log('You have selected: ' + $event);
        this.card = this.cardList[$event];
        for (let $item of this.cardList) {
            $item.selected = ($item.index == $event);
        }
    }

    private calcCardSizes(item: SandboxCardViewModel) {
        item.width = `${item.size}rem`;
        item.height = `${item.size}rem`;
        if ((this.formGroup.get('fxLayoutAlignVertical')?.value?.includes('stretch') || this.formGroup.get('fxLayoutAlignVertical')?.value == '') && this.formGroup.get('fxLayout')?.value == 'row') item.height = `initial`;
        if ((this.formGroup.get('fxLayoutAlignVertical')?.value?.includes('stretch') || this.formGroup.get('fxLayoutAlignVertical')?.value == '') && this.formGroup.get('fxLayout')?.value == 'column') item.width = `initial`;
    }
}
