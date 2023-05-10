import React, { useState } from 'react'
import {
  Button,
  Header,
  Table,
  TableBody,
  TableData,
  TableHeader,
  TableHeaderCell,
  TableRows,
  TableRowsHeader,
  Wrapper,
} from './styles'
import { Input } from '../Input'
import ContentEditable from 'react-contenteditable'
import { SimulationContextType, TableItem } from '../../pages/Simulation'

export function EditableTable({ data, headers }: SimulationContextType) {
  const [EditableData, setData] = useState(data)
  const [originalData, setOriginalData] = useState(data)

  const [editMode, setEditMode] = useState(false)
  const [saveMode, setSaveMode] = useState(true)

  const handleEditModeChange = () => {
    if (editMode === true) {
      setEditMode(false)
    } else setEditMode(true)
    if (saveMode === false) {
      setSaveMode(true)
    } else setSaveMode(false)
  }

  const handleEdit = (index: number, field: keyof TableItem, value: string) => {
    const newData = [...EditableData]
    newData[index][field] = value
    setData(newData)
  }

  const handleCancel = () => {
    setData(originalData)
    handleEditModeChange()
  }

  const handleSave = () => {
    setOriginalData(EditableData)
    handleEditModeChange()
  }

  return (
    <Wrapper>
      <Header>
        <Input placeholder="Pesquisar "></Input>
        {saveMode && <Button onClick={handleEditModeChange}>Edit</Button>}
        {editMode && (
          <>
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </>
        )}
      </Header>
      <Table>
        <TableHeader>
          {headers && (
            <TableRowsHeader>
              {headers.map((item) => (
                <TableHeaderCell key={item.header}>
                  {item.header}
                </TableHeaderCell>
              ))}
            </TableRowsHeader>
          )}
        </TableHeader>
        <TableBody>
          {data &&
            data.map((item, index) => (
              <TableRows key={item.id}>
                {headers.map((header) => (
                  <TableData key={header.acessor}>
                    <ContentEditable
                      html={item[header.acessor]}
                      onChange={(e) =>
                        handleEdit(index, header.acessor, e.target.value)
                      }
                      disabled={!editMode}
                    />
                  </TableData>
                ))}
              </TableRows>
            ))}
        </TableBody>
      </Table>
    </Wrapper>
  )
}
