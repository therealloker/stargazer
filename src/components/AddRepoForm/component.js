import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getRepository } from '../../actions'
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import { repositoryError } from '../../redux/selectors'
import './component.scss'

const AddRepoForm = () => {
  const [repoName, setRepoName] = useState('')
  const error = useSelector(repositoryError)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getRepository(repoName))
    setRepoName('')
  }

  const handleChange = (e) => {
    setRepoName(e.target.value)
  }

  return(
    <Form
      className="add-repo-form"
      onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <FormControl
          onChange={handleChange}
          placeholder="Enter repository name, eg. facebook/react"
          title="Should be formatted as {owner}/{repo}, eg. facebook/react"
          value={repoName}
          pattern="^([a-zA-z0-9_.-]+\/)([a-zA-z0-9_.-]+)$"
          required
        />
        <InputGroup.Append>
          <Button
            type="submit"
            variant="info">
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup> 
      {error}
    </Form>
  )
}

export default AddRepoForm;
