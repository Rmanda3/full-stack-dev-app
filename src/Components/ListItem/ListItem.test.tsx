import React from "react";
import {fireEvent, render, screen} from '@testing-library/react'
import ListItem from "./ListItem";
import userEvent from "@testing-library/user-event";

describe('ListItem Test Suite',()=>{
    test('ListItem UI loading test', ()=>{
        render(<ListItem dataItem={'test'}/>);
        const input = screen.getByRole('radio');
        expect(input).toBeInTheDocument();
    });
    test('ListItem onChange test', ()=>{
        const isError = jest.fn();
        render(<ListItem dataItem={'test'}/>);
        const input = screen.getByRole('radio');
        // fireEvent.change(input, {target:{checked: true}});
        input.onchange(true)
        expect(input).toBeChecked();
    });
    test('ListItem onKeyDown test', ()=>{
        render(<ListItem dataItem={'test'}/>);
        const input = screen.getByRole('radio');
        fireEvent.keyDown(input,{key:'F1'});
        expect(input).toBeChecked();
    });
    test('ListItem onKeyDown test', ()=>{
        render(<ListItem dataItem={'test'}/>);
        const input = screen.getByRole('radio');
        fireEvent.keyDown(input,{key:'F2'});
        expect(input).not.toBeChecked();
    });
});